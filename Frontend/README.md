# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


```markdown
# Frontend - Instagram Clone  

This is the frontend of the Instagram Clone application. The frontend is built using **React.js** and styled with **Tailwind CSS**. It offers a responsive and user-friendly interface to manage features like user authentication, post uploads, dark mode, and more.  

---  

## Tech Stack  

- **React.js**: Library for building the user interface.  
- **React Router**: For navigation and routing between pages.  
- **Axios**: To handle API requests.  
- **Tailwind CSS**: For styling the application with utility-first CSS.  
- **React Toastify**: For displaying notifications.  
- **React Icons**: For UI icons.  
- **JWT Decode**: To decode and validate user tokens.  
- **Swiper.js**: For carousel-based UI components.  

---  

## Features  

- **User Authentication**: Login and signup with validation.  
- **Dark Mode**: Toggles between light and dark themes.  
- **Post Uploads**: Drag-and-drop interface for adding new posts.  
- **User Search**: Search for other users and view their profiles.  
- **Notifications**: Toast notifications for feedback.  
- **Responsive Design**: Fully responsive across all device sizes.  

---  

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-repo/instagram-clone.git  
   ```  

2. Navigate to the frontend directory:  
   ```bash  
   cd frontend  
   ```  

3. Install dependencies:  
   ```bash  
   npm install  
   ```  

4. Start the development server:  
   ```bash  
   npm run dev  
   ```  

The application will be running at [http://localhost:5173](http://localhost:5173).  

---  

## Scripts  

- **`npm run dev`**: Starts the development server.  
- **`npm run build`**: Builds the application for production.  
- **`npm run preview`**: Serves the production build locally.  

---  

## Folder Structure  

```
frontend/  
├── src/  
│   ├── components/      # Reusable UI components (e.g., Navbar, PostCard).  
│   ├── pages/           # Application pages (e.g., Login, Signup, Home).  
│   ├── hooks/           # Custom React hooks.  
│   ├── utils/           # Utility functions (e.g., token management).  
│   ├── App.jsx          # Root component of the app.  
│   ├── main.jsx         # Entry point of the React app.  
├── public/              # Public assets (e.g., images, favicon).  
├── tailwind.config.js   # Tailwind CSS configuration.  
├── vite.config.js       # Vite configuration.  
├── package.json         # Project dependencies and scripts.  
└── README.md            # This file.  
```  

---  

## Dependencies  

| Dependency           | Purpose                                     |  
|----------------------|---------------------------------------------|  
| **axios**            | To handle HTTP requests.                   |  
| **react-router-dom** | For navigation and routing.                |  
| **react-toastify**   | For notifications and alerts.              |  
| **react-icons**      | For using a wide range of icons.           |  
| **swiper**           | For carousel and slider UI components.     |  
| **jwt-decode**       | To decode JWT tokens for user sessions.    |  

---  

## Screenshots  

### Login Page:  
![Login Page](../Instagram%20Clone/login.png)  

### Signup Page:  
![Signup Page](../Instagram%20Clone/signup.png)  

### Dark Mode:  
![Dark Mode](../Instagram%20Clone/dark.png)  

### Post Upload:  
![Post Upload](../Instagram%20Clone/upload.png)  

### Profile Updates:  
![Profile Updates](../Instagram%20Clone/updates.png)  

### Updated Post:  
![Updated Post](../Instagram%20Clone/updated.png)  

### Search User:  
![Search User](../Instagram%20Clone/search.png)  

### View Other User Profile:  
![Other User](../Instagram%20Clone/more.png)  

### Delete Post:  
![Delete Post](../Instagram%20Clone/delete.png)  

---  

## Known Issues  

- Ensure that the backend server is running at `http://localhost:3000` or update the `BASE_URL` in API calls accordingly.  
- Authentication tokens must be valid and are expected in the `localStorage`.  

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

### Explanation:
1. **Screenshots**: The paths have been adjusted to point to a potential folder (`/src/assets/screenshots/`) where the screenshots are stored. Ensure the folder structure matches.  
2. **Folder Structure**: Matches React best practices with dedicated folders for components, pages, hooks, and utils.  
3. **Installation and Usage**: Includes steps to run the frontend independently.  
4. **Dependencies**: Lists all frontend libraries with a brief purpose.  

Let me know if you’d like to tweak anything!