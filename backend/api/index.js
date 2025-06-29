import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import errorHandler from '../middleware/error.js';
import notFound from '../middleware/notFound.js';
import imageRoutes from '../routes/imageRoutes.js';
import menuRoutes from '../routes/menuRoutes.js';
import {connectDB} from '../utils/mongo.js';

const app = express();

// Connect to MongoDB
connectDB().then(() => {
	console.log('🔥🔥🔥 SERVER IS RUNNING 🔥🔥🔥');
	app.listen(3001);
});

// CORS configuration
const corsOptions = {
	origin: ['http://localhost:3000', 'https://mona-lize.vercel.app'],
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	credentials: true,
};

// Middleware
app.use(cors(corsOptions));
// app.use(cors());
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
