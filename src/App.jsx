import React from 'react'
import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from 'react-router-dom'
import HomePage from './pages/Home'
import ProductPage from './pages/Product'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFound'
import ContactPage from './pages/Contact'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'produit',
                element: <ProductPage />,
            },
            {
                path: 'contact',
                element: <ContactPage />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
])

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default App
