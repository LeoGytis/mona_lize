import {Trash2} from 'lucide-react';
import Image from 'next/image';
import React, {useState} from 'react';
import {MenuItem, menuRequests} from '../../service/menuRequests';

interface MenuCardFormProps {
	item?: MenuItem;
	onCancel: () => void;
	onUpdate: () => void;
}

const MenuCardForm: React.FC<MenuCardFormProps> = ({
	item,
	onCancel,
	onUpdate,
}) => {
	const [formData, setFormData] = useState<MenuItem>(
		item || {
			id: 'new',
			name: '',
			description: '',
			price: 0,
		}
	);
	const [selectedImage, setSelectedImage] = useState<File | null>(null);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {name, value} = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: name === 'price' ? parseFloat(value) : value,
		}));
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setSelectedImage(file);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			if (selectedImage) {
				// Create FormData for file upload
				const formDataToSend = new FormData();
				formDataToSend.append('name', formData.name);
				formDataToSend.append('description', formData.description);
				formDataToSend.append('price', formData.price.toString());
				formDataToSend.append('image', selectedImage);

				if (!item) {
					await menuRequests.createMenuItem(formDataToSend);
				} else {
					await menuRequests.updateMenuItem(item.id, formDataToSend);
				}
			} else {
				// If no new image, send regular form data
				if (!item) {
					await menuRequests.createMenuItem(formData);
				} else {
					// When editing, always include the image data
					const formDataToSend = new FormData();
					formDataToSend.append('name', formData.name);
					formDataToSend.append('description', formData.description);
					formDataToSend.append('price', formData.price.toString());

					// Send the existing image data directly
					if (formData.image) {
						formDataToSend.append('imageData', formData.image.data);
						formDataToSend.append(
							'imageContentType',
							formData.image.contentType
						);
					}

					await menuRequests.updateMenuItem(item.id, formDataToSend);
				}
			}
			onUpdate();
			onCancel(); // This will close the form
		} catch (error) {
			console.error('Error saving menu item:', error);
		}
	};

	const handleDelete = async () => {
		if (!item) return;

		try {
			await menuRequests.deleteMenuItem(item.id);
			onUpdate();
		} catch (error) {
			console.error('Error deleting menu item:', error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-4 bg-white rounded-lg shadow-md"
			encType="multipart/form-data"
		>
			<div className="grid grid-cols-1 gap-4">
				<div>
					<label className="block mb-2">Name</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
					/>
				</div>
				<div>
					<label className="block mb-2">Price</label>
					<input
						type="number"
						name="price"
						value={formData.price}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
						min="0"
						step="0.01"
					/>
				</div>
				<div>
					<label className="block mb-2">Description</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleInputChange}
						className="w-full p-2 border rounded"
						required
						rows={3}
					/>
				</div>
				<div>
					<label className="block mb-2">Image</label>
					{formData.image && !selectedImage && (
						<div className="relative w-full h-48 mb-4">
							<Image
								src={`data:${formData.image.contentType};base64,${formData.image.data}`}
								alt={formData.name}
								fill
								className="object-cover rounded-lg"
							/>
						</div>
					)}
					<input
						type="file"
						name="image"
						accept="image/*"
						onChange={handleImageChange}
						className="w-full p-2 border rounded cursor-pointer bg-slate-200"
					/>
					{selectedImage && (
						<p className="mt-2 text-sm text-gray-600">
							New image selected: {selectedImage.name}
						</p>
					)}
				</div>
			</div>
			<div className="flex justify-between mt-4">
				{item && (
					<button
						type="button"
						onClick={handleDelete}
						className="px-3 py-2 font-semibold text-white bg-red-500 rounded-lg cursor-pointer hover:opacity-80"
					>
						<Trash2 className="size-5" />
					</button>
				)}
				<div className="flex gap-2 ml-auto">
					<button
						type="button"
						onClick={onCancel}
						className="btn-primary !bg-slate-400"
					>
						Cancel
					</button>
					<button type="submit" className="btn-primary">
						Save
					</button>
				</div>
			</div>
		</form>
	);
};

export default MenuCardForm;
