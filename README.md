# Firebase Auth

## Description

Firebase Auth is a testing lab built with **React**, **Redux Toolkit**, and **Firebase**, designed to explore efficient authentication and state management patterns. This project allows hands-on experimentation with:

- **User authentication** via Firebase (email/password login)
- **State management** for session persistence using Redux Toolkit
- **Firestore integration** for storing and retrieving user data
- **Material UI components** for a responsive interface
- **Accessibility improvements**, including ARIA attributes

It serves as a structured sandbox for understanding **authentication flows with Redux Toolkit and Firebase**, maintaining scalability and clean architecture principles.

## Technologies Used

- **React** – Frontend library for building UI components
- **Redux Toolkit** – Optimized state management with slices
- **Firebase Authentication** – Secure user login/logout
- **Firestore Database** – Cloud storage for journal data
- **Material UI** – Prebuilt UI components with styling
- **Vite** – Fast build tool for modern development

## Getting Started

### Installation & Setup

To run the project locally, follow these steps:

#### Clone the repository

```bash
git clone https://github.com/maitepv87/firebase-auth.git
cd firebase-auth
```

#### Install dependencies

```bash
npm install
```

#### Set up environment variables in a .env file

```ini
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

#### Start the development server

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.
