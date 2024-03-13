import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FeedbackPage from './Pages/FeedbackPage.jsx';
import HomePage from './Pages/HomePage.jsx';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React from 'react';
import './Assets/index.css';


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <HomePage />
    },
    {
      path: '/Feedback',
      element: <FeedbackPage />
    }
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
