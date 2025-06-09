// const BASE_URL = 'http://localhost:3001';
const BASE_URL = 'https://mona-lize-backend.vercel.app/api/v1';
//
export const baseApiService = {
	request: async <T,>(url: string, options: RequestInit = {}): Promise<T> => {
		try {
			const token = localStorage.getItem('token');
			const isFormData = options.body instanceof FormData;

			const headers: HeadersInit = {
				...(isFormData ? {} : {'Content-Type': 'application/json'}),
				...(token && {Authorization: `Bearer ${token}`}),
				...options.headers,
			};

			const response = await fetch(`${BASE_URL}${url}`, {
				...options,
				headers,
			});

			if (response.status === 401) {
				// Handle unauthorized access
				localStorage.removeItem('token');
				window.location.href = '/sign-in';
				throw new Error('Unauthorized access');
			}

			// Check if the response is JSON
			const contentType = response.headers.get('content-type');
			if (contentType && contentType.includes('application/json')) {
				const data = await response.json();
				if (!response.ok) {
					throw new Error(data.message || 'Request failed');
				}
				return data as T;
			} else {
				// Handle non-JSON response
				const text = await response.text();
				if (!response.ok) {
					throw new Error(text || 'Request failed');
				}
				return text as unknown as T;
			}
		} catch (error) {
			console.error('API Error:', error);
			throw error;
		}
	},
};
