
# Instagram Clone

This is a full-stack Instagram clone application built using modern web technologies. It includes a **React** and **Tailwind CSS** frontend, and a **Node.js** backend with **Express** and **MongoDB** (via Mongoose).

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Acknowledgements](#acknowledgements)

---

## Features
### Frontend:
- **Responsive UI**: Built with React and styled using TailwindCSS.
- **User Authentication**: Login and Signup flows integrated with the backend.
- **Post Functionality**: Users can upload images and view a timeline of posts.
- **Notifications**: Toast notifications for success and error messages.

### Backend:
- **JWT Authentication**: Secure user login with JSON Web Tokens.
- **Image Upload**: Integrated with Cloudinary for efficient image storage.
- **API Documentation**: Swagger-based API documentation for easy testing.
- **Validation**: Zod used for data validation.
- **Secure Data Storage**: Passwords hashed using bcrypt.

---

## Tech Stack

### **Frontend**
- **React**: UI library for building interactive user interfaces.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Toastify**: For toast notifications.
- **React Router DOM**: For routing.
- **Axios**: For API calls.

### **Backend**
- **Node.js**: Server-side runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.
- **JWT**: Secure user authentication.
- **Cloudinary**: Image hosting and management.
- **Swagger**: API documentation.

---

## Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/instagram-clone.git
cd instagram-clone
```

### 2. Setup the backend:
1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following:
    ```plaintext
    MONGO_URI=mongodb:your link
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_KEY=your_api_key
    CLOUDINARY_API_SECRET=your_api_secret
    ```

4. Start the backend server:
    ```bash
    npm run dev
    ```

### 3. Setup the frontend:
1. Navigate to the `frontend` folder:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

---
## Deployment
The application is deployed on an AWS EC2 instance running Ubuntu 20.04.
![Deployment Screenshot](Instagram%20Clone/AWSubuntu.png)

## Project Structure
```
instagram-clone/
├── Frontend/               # React frontend
│   ├── src/
│   ├── public/
│   ├── README.md
│   └── ...
├── Backend/                # Node.js backend
│   ├── src/
│   ├── README.md
│   └── ...
├── README.md               # Main project README
└── .gitignore
```

---

## Screenshots

### Home Page:
![Home Page](Instagram%20Clone/home.png)

### Login Page:
![Login Page](Instagram%20Clone/login.png)

### Signup Page:
![Signup Page](Instagram%20Clone/signup.png)

### Dark Mode:
![Dark Mode](Instagram%20Clone/dark.png)

### Upload Post:
![Upload Post](Instagram%20Clone/upload.png)

### Updates Section:
![Updates Section](Instagram%20Clone/updates.png)

### Updated Post:
![Updated Post](Instagram%20Clone/updated.png)

### Search Feature:
![Search Feature](Instagram%20Clone/search.png)

### Other User Profile:
![Other User Profile](Instagram%20Clone/more.png)

### Delete Post:
![Delete Post](Instagram%20Clone/delete.png)


---

## API Documentation
The backend APIs are documented using Swagger. To view the API documentation:
1. Start the backend server.
2. Open your browser and navigate to:
   ```
   http://localhost:3000/api-docs
   ```

---

## Acknowledgements
- **React** and **Node.js** community for amazing resources.
- **Cloudinary** for seamless image hosting.
- Special thanks to [Your Name](https://github.com/your-username) for building this project.

---

Feel free to contribute to this project or report any issues you encounter!
```

### **Next Steps for You**
1. Replace:
   - `path-to-home-page-screenshot.png` with your actual screenshot file paths or upload them to your GitHub repo.
   - `https://github.com/your-username/instagram-clone.git` with the actual GitHub repository link.
2. Update `Acknowledgements` and any dummy text as per your preferences.
3. Let me know if you'd like help with the `frontend` or `backend` READMEs! 😊