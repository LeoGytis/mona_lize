import {Plus} from 'lucide-react';
import React, {useState} from 'react';
import MenuCardForm from './MenuCardForm';

interface MenuCreateProps {
	onUpdate: () => void;
}

const MenuCreate: React.FC<MenuCreateProps> = ({onUpdate}) => {
	const [isCreating, setIsCreating] = useState(false);

	const handleCancel = () => {
		setIsCreating(false);
	};

	return (
		<>
			<div className="flex justify-between items-center mb-10">
				{!isCreating && (
					<button
						onClick={() => setIsCreating(true)}
						className="bg-orangemain text-white px-4 py-2 rounded-lg hover:opacity-80 flex items-center gap-2 font-semibold cursor-pointer"
					>
						<Plus className="size-5" />
						<span>Add New</span>
					</button>
				)}
			</div>

			{isCreating && (
				<div className="mb-10">
					<MenuCardForm
						onCancel={handleCancel}
						onUpdate={() => {
							onUpdate();
							setIsCreating(false);
						}}
					/>
				</div>
			)}
		</>
	);
};

export default MenuCreate;
