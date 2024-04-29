import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import ManagerHistory from './pages/ManagerHistory';
import ManagerComparison from './pages/ManagerComparison';
import About from './pages/About';
import CompareDetails from './pages/CompareDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/managerHistory',
    element: <ManagerHistory />,
  },
  {
    path: '/managerComparison',
    element: <ManagerComparison />,
  },
  {
    path: '/compareDetails/:id',
    element: <CompareDetails />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
