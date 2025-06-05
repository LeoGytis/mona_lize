import React, {useState} from 'react';
import {MenuItem} from '../../service/menuRequests';

interface MenuFormProps {
	onSubmit: (formData: Omit<MenuItem, 'id'>) => Promise<void>;
	initialData?: MenuItem;
	onCancel?: () => void;
}

const MenuForm: React.FC<MenuFormProps> = ({
	onSubmit,
	initialData,
	onCancel,
}) => {
	const [formData, setFormData] = useState<Omit<MenuItem, 'id'>>({
		name: initialData?.name || '',
		description: initialData?.description || '',
		price: initialData?.price || 0,
	});

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
		await onSubmit(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="mb-8 bg-white p-6 rounded-lg shadow-md"
		>
			<h2 className="text-xl font-semibold mb-4">
				{initialData ? 'Edit Menu Item' : 'Add New Menu Item'}
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
				<div className="md:col-span-2">
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
					className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
				>
					{initialData ? 'Update' : 'Add'} Item
				</button>
				{initialData && onCancel && (
					<button
						type="button"
						onClick={onCancel}
						className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
					>
						Cancel
					</button>
				)}
			</div>
		</form>
	);
};

export default MenuForm;
