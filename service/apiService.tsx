import { baseApiService } from './baseApiService';

export const apiService = {
  post: async <T, U>(url: string, body: U): Promise<any> => {
    return baseApiService.request<T>(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  getAll: async <T,>(
    url: string,
    params?: Record<string, string>,
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
    body: U,
  ): Promise<any> => {
    return baseApiService.request<T>(`${url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  },

  deleteGame: async <T, U>(url: string, body: U): Promise<any> => {
    return baseApiService.request<T>(`${url}`, {
      method: 'DELETE',
      body: JSON.stringify(body),
    });
  },
};
