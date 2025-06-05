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
		toJSON: {
			virtuals: true,
			transform: (doc, ret) => {
				delete ret._id;
				return ret;
			},
		},
		toObject: {
			virtuals: true,
			transform: (doc, ret) => {
				delete ret._id;
				return ret;
			},
		},
	}
);

// Add virtual property for id
menuSchema.virtual('id').get(function () {
	return this._id.toHexString();
});

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
