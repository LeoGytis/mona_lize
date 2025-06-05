import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		image: {
			type: String,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
