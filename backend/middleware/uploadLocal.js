import multer from 'multer';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		// Use absolute path to ensure the uploads directory is found
		const uploadsPath = path.join(__dirname, '..', 'uploads');
		cb(null, uploadsPath);
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
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

const uploadLocal = multer({
	storage: storage,
	fileFilter: fileFilter,
	limits: {
		fileSize: 5 * 1024 * 1024, // 5MB limit
	},
});

export default uploadLocal;
