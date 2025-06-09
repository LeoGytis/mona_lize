import 'dotenv/config';
import mongoose from 'mongoose';

const username = encodeURIComponent(process.env.DB_USERNAME || '');
const password = encodeURIComponent(process.env.DB_PASSWORD || '');
const dbURI = `mongodb+srv://${username}:${password}@mona-lize.oxkq4p6.mongodb.net/?retryWrites=true&w=majority&appName=mona-lize`;

export const connectDB = async () => {
	try {
		await mongoose.connect(dbURI);
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.error('MongoDB connection error:', error);
		process.exit(1);
	}
};
