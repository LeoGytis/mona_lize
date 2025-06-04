// import 'dotenv/config';
import express from 'express';
import middleware from './middleware/middleware.js';
import menuRoutes from './routes/menuRoutes.js';

const app = express();

middleware(app);

// Routes
app.use('/menu', menuRoutes);

//connect to mongoDB
// const username = encodeURIComponent(process.env.DB_USERNAME);
// const password = encodeURIComponent(process.env.DB_PASSWORD);
// const dbURI = `mongodb+srv://${username}:${password}@nodeblog.wo7j5.mongodb.net/blogs?retryWrites=true&w=majority&appName=nodeblog`;

// mongoose
// 	.connect(dbURI)
// 	.then((result) => app.listen(3001))
// 	.catch((err) => console.log(err));

app.listen(3001);
