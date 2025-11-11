# Backend Project

## 📘 Project Overview

This project features a robust backend built with Node.js and Express.js, designed to handle user authentication and other core functionalities. It integrates with MongoDB for data storage, Mongoose for ODM, and leverages JWT for secure authentication. Key features include user registration, login, logout, email verification, and password management (forgot/reset). The backend is designed with a clean architecture, utilizing custom utilities for API responses, error handling, and asynchronous operations.

A separate frontend (React SPA) is intended to connect to this backend, providing a complete full-stack application experience.

## ⚙️ Tech Stack

**Backend:**

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ODM:** Mongoose
* **Authentication:** JSON Web Tokens (JWT), bcrypt (for password hashing)
* **Cloud Storage:** Cloudinary (for file uploads, e.g., user avatars)
* **Email Service:** Nodemailer
* **Validation:** Zod
* **Environment Variables:** dotenv
* **Utilities:** Custom `ApiResponse`, `ApiError`, `asyncHandler`

**Frontend (Planned/To be connected):**

* **Library:** React
* **HTTP Client:** Axios
* **Routes:** Login, Register, Verify Email, Forgot Password, Reset Password

## 📁 Folder Structure

```
.
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package-lock.json
├── package.json
├── public/
│   └── images/
│       └── .gitkeep
└── src/
    ├── app.js
    ├── index.js
    ├── controllers/
    │   ├── auth.controllers.js
    │   └── healthcheck.controllers.js
    ├── db/
    │   └── index.js
    ├── middlewares/
    │   ├── auth.middleware.js
    │   └── validator.middleware.js
    ├── models/
    │   └── user.models.js
    ├── routes/
    │   ├── auth.routes.js
    │   └── healthcheck.routes.js
    ├── utils/
    │   ├── api-error.js
    │   ├── api-response.js
    │   ├── async-handler.js
    │   ├── constants.js
    │   └── mail.js
    └── validators/
        └── index.js
```

## 🧩 Installation Steps

### Backend

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd backendProject
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory based on the `.env.sample` provided below.
4. **Start the development server:**

    ```bash
    npm start
    ```

    The backend server will typically run on `http://localhost:8000` (or the port specified in your `.env` file).

### Frontend (Separate React SPA)

*(Note: This project description focuses on the backend. The frontend is a separate React application that will connect to this backend. Installation steps for the frontend would typically involve navigating to its directory, installing its dependencies, and starting its development server.)*


## 🧠 API Endpoints Documentation

All API endpoints are prefixed with `/api/v1`.

### Health Check

* **GET** `/api/v1/healthcheck`
  * **Description:** Checks the health of the API.
  * **Response:**

        ```json
        {
            "success": true,
            "message": "API is healthy"
        }
        ```

### Authentication

* **POST** `/api/v1/auth/register`
  * **Description:** Registers a new user.
  * **Request Body Example:**

        ```json
        {
            "username": "testuser",
            "email": "test@example.com",
            "password": "password123",
            "fullName": "Test User"
        }
        ```

* **POST** `/api/v1/auth/login`
  * **Description:** Logs in an existing user and returns access and refresh tokens.
  * **Request Body Example:**

        ```json
        {
            "email": "test@example.com",
            "password": "password123"
        }
        ```

* **POST** `/api/v1/auth/logout`
  * **Description:** Logs out the current user by clearing tokens. Requires authentication.
  * **Request Body Example:** (No request body needed)

* **POST** `/api/v1/auth/verify-email`
  * **Description:** Verifies a user's email address using a token sent to their email.
  * **Request Body Example:**

        ```json
        {
            "emailVerificationToken": "token_from_email"
        }
        ```

* **POST** `/api/v1/auth/forgot-password`
  * **Description:** Initiates the forgot password process by sending a reset link to the user's email.
  * **Request Body Example:**

        ```json
        {
            "email": "test@example.com"
        }
        ```

* **POST** `/api/v1/auth/reset-password`
  * **Description:** Resets the user's password using a token received via email.
  * **Request Body Example:**

        ```json
        {
            "resetPasswordToken": "token_from_email",
            "newPassword": "new_strong_password"
        }
        ```

## 💻 Development Commands

* **`npm install`**: Installs all necessary project dependencies.
* **`npm start`**: Starts the backend server in development mode.

## 🚀 Deployment

*(This section is a placeholder. Details on deployment to platforms like Heroku, Vercel, AWS, etc., would go here.)*

## 📫 Contact / Author Info

For any questions or feedback, please reach out to:

* **Author:** [Your Name/Organization]
* **Email:** [Your Email]
* **GitHub:** [Your GitHub Profile/Organization Link]
