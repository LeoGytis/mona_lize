import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
// import methodOverride from 'method-override';

const middleware = (app) => {
	app.use(
		cors({
			origin: 'http://localhost:3000',
			methods: ['GET', 'POST', 'PATCH', 'DELETE'],
			allowedHeaders: ['Content-Type', 'Authorization'],
		})
	);

	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(morgan('dev'));

	// static files
	// app.use(express.static('public'));
	//  Support PUT and PATCH via forms
	// app.use(methodOverride('_method'));
};

export default middleware;
