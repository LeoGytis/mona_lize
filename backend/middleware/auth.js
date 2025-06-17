import admin from 'firebase-admin';
// import {createRequire} from 'module';
// const require = createRequire(import.meta.url);
// const serviceAccount = require('./firebase-adminsdk.json');

// Initialize Firebase Admin
// const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.FIREBASE_PROJECT_ID,
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
		}),
	});
}

export const verifyToken = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return res.status(401).json({error: 'No token provided'});
		}

		const token = authHeader.split('Bearer ')[1];
		const decodedToken = await admin.auth().verifyIdToken(token);
		req.user = decodedToken;
		next();
	} catch (error) {
		console.error('Error verifying token:', error);
		res.status(401).json({error: 'Invalid token'});
	}
};
