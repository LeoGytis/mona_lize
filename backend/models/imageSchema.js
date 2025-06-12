import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
	filename: {
		type: String,
		required: true,
	},
	filepath: {
		type: String,
		required: true,
	},
});

// module.exports = mongoose.model('Image', ImageSchema);
const Image = mongoose.model('Image', ImageSchema);

export default Image;
