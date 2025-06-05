import React, {useState} from 'react';
import {MenuItem} from '../../service/menuRequests';

interface MenuCardFormProps {
	item: MenuItem;
	onSubmit: (item: MenuItem | FormData) => void;
	onCancel: () => void;
}

const MenuCardForm: React.FC<MenuCardFormProps> = ({
	item,
	onSubmit,
	onCancel,
}) => {
	const [formData, setFormData] = useState<MenuItem>(item);
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(
		item.image?.data || null
	);

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
			// Create preview URL
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (selectedImage) {
			// Create FormData for file upload
			const formDataToSend = new FormData();
			formDataToSend.append('name', formData.name);
			formDataToSend.append('description', formData.description);
			formDataToSend.append('price', formData.price.toString());
			formDataToSend.append('image', selectedImage);

			// Call onSubmit with FormData
			onSubmit(formDataToSend);
		} else {
			// If no new image, send regular form data
			onSubmit(formData);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-4 rounded-lg shadow-md"
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
					<input
						type="file"
						name="image"
						accept="image/*"
						onChange={handleImageChange}
						className="w-full p-2 border rounded"
					/>
					{previewUrl && (
						<div className="mt-2">
							<img
								src={previewUrl}
								alt="Preview"
								className="max-w-xs max-h-48 object-contain"
							/>
						</div>
					)}
				</div>
			</div>
			<div className="mt-4 flex gap-2">
				<button
					type="submit"
					className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
				>
					Save
				</button>
				<button
					type="button"
					onClick={onCancel}
					className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
				>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default MenuCardForm;
