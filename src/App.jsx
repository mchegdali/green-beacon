import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Layout from './components/Layout'
import NotFoundPage from './pages/NotFound'
import ContactPage from './pages/Contact'

const App = () => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/produit" element={<Product />} />
                        <Route path="/qui-sommes-nous" element={<About />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App
