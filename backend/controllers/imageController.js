import expressHandler from 'express-async-handler';
import Image from '../models/imageSchema.js';

const postImage = expressHandler(async (req, res) => {
	try {
		if (!req.file) {
			return res.status(500).json({error: 'No file found to upload'});
		}

		const imageFile = Image({
			filename: req.file.filename,
			filepath: req.file.path,
		});

		const savedImage = await imageFile.save();

		res.status(200).json(savedImage);
	} catch (error) {
		res.status(500).json({error: 'Failed to save image: ' + error.message});
	}
});

export {postImage};
