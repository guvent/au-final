import React from 'react';
import router from './router';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
      {/* TODO: add other providers and contexts... */}
    </Provider>
  </React.StrictMode>
);
