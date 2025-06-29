import {apiService} from './apiService';

export interface ImageResponse {
	filename: string;
	filepath: string;
	_id?: string;
}

export const imageRequests = {
	// Upload a new image
	uploadImage: async (imageFile: File): Promise<ImageResponse> => {
		const formData = new FormData();
		formData.append('image', imageFile);

		return apiService.post<ImageResponse, FormData>('/image', formData);
	},
};
