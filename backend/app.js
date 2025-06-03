// import 'dotenv/config';
import express from 'express';
// import methodOverride from 'method-override';
// import morgan from 'morgan';

const app = express();

//connect to mongoDB
// const username = encodeURIComponent(process.env.DB_USERNAME);
// const password = encodeURIComponent(process.env.DB_PASSWORD);
// const dbURI = `mongodb+srv://${username}:${password}@nodeblog.wo7j5.mongodb.net/blogs?retryWrites=true&w=majority&appName=nodeblog`;

// mongoose
// 	.connect(dbURI)
// 	.then((result) => app.listen(3001))
// 	.catch((err) => console.log(err));

app.listen(3001);

//middleware & static files
// app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));
// app.use(morgan('dev'));
// // Middleware to support PUT and PATCH via forms
// app.use(methodOverride('_method'));
