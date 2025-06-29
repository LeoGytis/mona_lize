import multer from 'multer';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		// Use absolute path to save files in a gallery folder at the root level
		const galleryPath = path.join(__dirname, '..', '..', 'gallery');
		cb(null, galleryPath);
	},
	filename: (req, file, cb) => {
		const extension = path.extname(file.originalname);
		cb(null, `image-${Date.now()}${extension}`);
	},
});

// File filter to only allow images
const fileFilter = (req, file, cb) => {
	if (file.mimetype.startsWith('image/')) {
		cb(null, true);
	} else {
		cb(new Error('Not an image! Please upload only images.'), false);
	}
};

const fileUploadLocal = multer({
	storage: storage,
	fileFilter: fileFilter,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
});

export default fileUploadLocal;
