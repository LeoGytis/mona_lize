import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import errorHandler from '../middleware/error.js';
import notFound from '../middleware/notFound.js';
import menuRoutes from '../routes/menuRoutes.js';
import {connectDB} from '../utils/mongo.js';

const app = express();

// Connect to MongoDB
connectDB().then(() => {
	app.listen(3001);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

app.get('/test', (req, res) => {
	res.json({message: 'Server is working!'});
});

// Routes
app.use('/api/v1/menu', menuRoutes);
app.use('/api/v1/image', imageRoutes);

// Error middleware
app.use(notFound);
app.use(errorHandler);
