import {apiService} from './apiService';

export interface MenuItem {
	id: string;
	name: string;
	description: string;
	price: number;
}

export const menuRequests = {
	// Get all menu items
	getAllMenuItems: async (): Promise<MenuItem[]> => {
		return apiService.getAll<MenuItem[]>('/menu');
	},

	// Get menu item by ID
	getMenuItemById: async (id: string): Promise<MenuItem> => {
		return apiService.getOne<MenuItem>(`/menu/${id}`);
	},

	// Create new menu item
	createMenuItem: async (
		menuItem: Omit<MenuItem, 'id'>
	): Promise<MenuItem> => {
		return apiService.post<MenuItem, Omit<MenuItem, 'id'>>(
			'/menu',
			menuItem
		);
	},

	// Update menu item
	updateMenuItem: async (
		id: string,
		menuItem: Partial<MenuItem>
	): Promise<MenuItem> => {
		return apiService.patch<MenuItem, Partial<MenuItem>>(
			'/menu',
			id,
			menuItem
		);
	},

	// Delete menu item
	deleteMenuItem: async (id: string): Promise<void> => {
		return apiService.deleteGame<void, {id: string}>('/menu', {id});
	},

	// Get menu items by category
	getMenuItemsByCategory: async (category: string): Promise<MenuItem[]> => {
		return apiService.getAll<MenuItem[]>('/menu', {category});
	},
};
