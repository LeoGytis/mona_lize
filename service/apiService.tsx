import {baseApiService} from './baseApiService';

export const apiService = {
	post: async <T, U>(url: string, body: U): Promise<any> => {
		const isFormData = body instanceof FormData;
		return baseApiService.request<T>(url, {
			method: 'POST',
			body: isFormData ? body : JSON.stringify(body),
			headers: isFormData ? {} : {'Content-Type': 'application/json'},
		});
	},

	getAll: async <T,>(
		url: string,
		params?: Record<string, string>
	): Promise<any> => {
		const queryString = params
			? `?${new URLSearchParams(params).toString()}`
			: '';
		return baseApiService.request<T>(`${url}${queryString}`, {
			method: 'GET',
		});
	},

	getOne: async <T,>(url: string): Promise<any> => {
		return baseApiService.request<T>(`${url}`, {
			method: 'GET',
		});
	},

	patch: async <T, U>(
		url: string,
		id: string | number,
		body: U
	): Promise<any> => {
		const isFormData = body instanceof FormData;
		return baseApiService.request<T>(`${url}/${id}`, {
			method: 'PATCH',
			body: isFormData ? body : JSON.stringify(body),
			headers: isFormData ? {} : {'Content-Type': 'application/json'},
		});
	},

	delete: async <T,>(url: string): Promise<any> => {
		return baseApiService.request<T>(url, {
			method: 'DELETE',
		});
	},
};
