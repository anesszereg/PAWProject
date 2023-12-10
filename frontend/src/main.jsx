import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login/Login.jsx';
import TeacherDashboard from './pages/dashboard-teacher/TeacherDashboard.jsx';
import Student from './pages/Student/Student.jsx';


const router = createBrowserRouter([
  // {
  //   path: "*",
  //   element: <Page404 />,
  // },
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/Login",
    element: <Login />,
  },
 
  {
    path: "/TeacherDashboard",
    element: <TeacherDashboard />,
  },
 
 
  {
    path: "/StudentDashboard",
    element: <Student />,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
