import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainLayout from './layouts/MainLayout';
import NotFound from './NotFound';
import reportWebVitals from './reportWebVitals';
import HttpCat from './routes/HttpCat';
import Login from './routes/Login';
import RandomUsers from './routes/RandomUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { path: 'users/random', element: <RandomUsers /> },
      { path: 'http-cat', element: <HttpCat /> },
    ],
  },
  { path: '/login', element: <Login /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
