const BASE_URL = 'http://localhost:3001';

export const baseApiService = {
	request: async <T,>(
		url: string,
		options: RequestInit = {}
	): Promise<any> => {
		try {
			const token = localStorage.getItem('accessToken');
			const headers: HeadersInit = {
				'Content-Type': 'application/json',
				// 'Accept-Language': 'lt', // arba en
				...(token && {Authorization: `Bearer ${token}`}),
				...options.headers,
			};

			const response = await fetch(`${BASE_URL}${url}`, {
				...options,
				headers,
			});

			if (response.status === 401) {
				try {
					const refreshToken = localStorage.getItem('refreshToken');
					const refreshResponse = await fetch(
						`${BASE_URL}/auth/refresh`,
						{
							method: 'POST',
							headers: {'Content-Type': 'application/json'},
							body: JSON.stringify({refreshToken}),
						}
					);

					if (!refreshResponse.ok) throw new Error('Refresh failed');

					const {accessToken} = await refreshResponse.json();
					localStorage.setItem('accessToken', accessToken);

					return baseApiService.request<T>(url, options);
				} catch (error) {
					localStorage.clear();
					window.location.href = '/login';
					throw error;
				}
			}

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || 'Request failed');
			}

			return data;
		} catch (error) {
			console.error('API Error:', error);
			throw error;
		}
	},
};
