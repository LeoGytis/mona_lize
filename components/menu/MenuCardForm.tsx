import React, {useState} from 'react';
import {MenuItem} from '../../service/menuRequests';

interface MenuCardFormProps {
	item: MenuItem;
	onSubmit: (item: MenuItem) => void;
	onCancel: () => void;
}

const MenuCardForm: React.FC<MenuCardFormProps> = ({
	item,
	onSubmit,
	onCancel,
}) => {
	const [formData, setFormData] = useState<MenuItem>(item);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const {name, value} = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: name === 'price' ? parseFloat(value) : value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-4 rounded-lg shadow-md"
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
