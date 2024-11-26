
```markdown
# Backend - Instagram Clone

This is the backend of the Instagram Clone application. It provides APIs for user authentication, image uploads, post management, and other features. The backend is built using **Node.js** and **Express.js**, with **MongoDB** as the database. It uses **Mongoose** for ORM and integrates **Cloudinary** for image storage.

---

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for creating APIs.
- **MongoDB**: NoSQL database for storing user and post data.
- **Mongoose**: ODM library for MongoDB.
- **Cloudinary**: Cloud-based image storage and processing.
- **JWT (JSON Web Tokens)**: For user authentication and session management.
- **Zod**: For input validation.
- **Swagger**: For API documentation.
- **CORS**: To handle cross-origin requests.

---

## Features

- **User Authentication**: Signup, login, and JWT-based authentication.
- **Image Uploads**: Images are uploaded and managed using Cloudinary.
- **Post Management**: Create, update, and delete posts.
- **Dark Mode Support**: Backend accommodates settings related to dark mode preferences.
- **Search Functionality**: APIs for searching users and posts.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/instagram-clone.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory and add the following environment variables:
   ```env
   PORT=3000
   MONGO_URI=<your_mongodb_connection_string>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
   JWT_SECRET=<your_jwt_secret>
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

---

## Scripts

- **`npm start`**: Runs the application in production mode.
- **`npm run dev`**: Runs the application in development mode with hot reloading (via nodemon).

---

## API Documentation

API endpoints are documented using **Swagger**. Access the Swagger UI at:
```
http://localhost:3000/api-docs
```

### Example Endpoints
1. **User Signup**: 
   - Method: `POST`
   - URL: `/api/v1/user/signup`
   - Body:
     ```json
     {
       "username": "john_doe",
       "email": "john@example.com",
       "password": "password123"
     }
     ```
2. **Image Upload**:
   - Method: `POST`
   - URL: `/api/v1/posts/upload`
   - Headers:
     - `Authorization: Bearer <your_token>`
   - Body (Multipart/Form-Data):
     - `image`: File
     - `description`: Text

---

## Dependencies

| Dependency              | Purpose                                      |
|-------------------------|----------------------------------------------|
| **bcrypt**              | For password hashing.                       |
| **cloudinary**          | For image storage and retrieval.            |
| **cors**                | To enable cross-origin requests.            |
| **dotenv**              | For managing environment variables.         |
| **express**             | Backend framework for building APIs.        |
| **jsonwebtoken**        | For user authentication using tokens.       |
| **mongoose**            | MongoDB object modeling tool.               |
| **multer**              | For handling file uploads.                  |
| **swagger-jsdoc**       | For generating Swagger documentation.       |
| **swagger-ui-express**  | For serving Swagger UI.                     |
| **zod**                 | For input validation.                       |

---

## Folder Structure

```
backend/
├── src/
│   ├── controllers/      # Contains route controllers (e.g., userController.js)
│   ├── models/           # Contains Mongoose models (e.g., userModel.js)
│   ├── routes/           # Contains route definitions (e.g., userRoutes.js)
│   ├── middlewares/      # Contains middleware logic (e.g., auth.js)
│   ├── utils/            # Utility functions (e.g., cloudinary.js)
│   ├── index.js          # Entry point of the backend.
│   ├── config/           # Configuration files (e.g., db connection).
├── .env                  # Environment variables.
├── package.json          # Node.js dependencies and scripts.
└── README.md             # This file.
```

---

## Known Issues

- Ensure you have a stable internet connection for Cloudinary operations.
- The backend assumes the frontend is running at `http://localhost:5173`. Update CORS settings if necessary.

---

## Screenshots

### Swagger API Documentation:
![Swagger](../docs/swagger.png)

---

## Contribution Guidelines

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Create a pull request.

---

## License

This project is licensed under the **MIT License**.
```

---

### What’s included here:
1. **Comprehensive description** of the backend's purpose and technologies.
2. **Installation instructions** for developers.
3. Key **API endpoints** with examples.
4. A complete **folder structure** to aid navigation.
5. **Known issues** and how to resolve them.

Let me know if there’s anything else you’d like to add!