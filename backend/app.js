import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import middleware from './middleware/middleware.js';
import menuRoutes from './routes/menuRoutes.js';

const app = express();

const username = encodeURIComponent(process.env.DB_USERNAME);
const password = encodeURIComponent(process.env.DB_PASSWORD);
const dbURI = `mongodb+srv://${username}:${password}@nodeblog.wo7j5.mongodb.net/mona-lize?retryWrites=true&w=majority&appName=nodeblog`;

mongoose
	.connect(dbURI)
	.then(() => {
		app.listen(3001);
	})
	.catch((err) => console.log(err));

middleware(app);

app.use('/menu', menuRoutes);
