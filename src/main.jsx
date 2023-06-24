import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import Root from './js/routes/Root';
import HomePage from './js/routes/HomePage/HomePage';
import AboutPage from './js/routes/AboutPage/AboutPage';
import ServicesPage from './js/routes/ServicesPage/ServicesPage';
import ContactPage from './js/routes/ContactPage/ContactPage';
import DefaultPage from './js/routes/DefaultPage/DefaultPage';

const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckhn1m4m5e64i01xp9b6vczdu/master',
  cache: new InMemoryCache()
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <DefaultPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/services",
        element: <ContactPage />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>,
)
