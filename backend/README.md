# Backend API

This is a serverless API deployed on Vercel using Express.js and MongoDB.

## Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# MongoDB Connection
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password

# Firebase Admin (for authentication)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY=your_firebase_private_key

# Environment
NODE_ENV=production
```

## Vercel Deployment

1. Make sure all environment variables are set in your Vercel project settings
2. Deploy the backend directory to Vercel
3. The API will be available at your Vercel domain

## API Endpoints

-   `GET /api/health` - Health check endpoint
-   `GET /test` - Simple test endpoint
-   `GET /api/v1/menu` - Get all menu items
-   `GET /api/v1/menu/:id` - Get specific menu item
-   `POST /api/v1/menu` - Create new menu item (requires auth)
-   `PATCH /api/v1/menu/:id` - Update menu item (requires auth)
-   `DELETE /api/v1/menu/:id` - Delete menu item (requires auth)

## Local Development

```bash
npm install
npm run dev
```

The server will start on port 3001 (for local development only).
