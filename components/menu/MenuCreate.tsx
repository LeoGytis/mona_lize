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
			<div className="flex items-center justify-end mb-8">
				{!isCreating && (
					<button
						onClick={() => setIsCreating(true)}
						className="flex items-center gap-2 btn-primary"
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
