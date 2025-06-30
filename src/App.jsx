import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Layout from '@/components/organisms/Layout'
import HomePage from '@/components/pages/HomePage'
import AboutPage from '@/components/pages/AboutPage'
import ProductsPage from '@/components/pages/ProductsPage'
import ProductDetailPage from '@/components/pages/ProductDetailPage'
import ProductionCapabilitiesPage from '@/components/pages/ProductionCapabilitiesPage'
import QualityStandardsPage from '@/components/pages/QualityStandardsPage'
import ContactPage from '@/components/pages/ContactPage'
import RequestQuotePage from '@/components/pages/RequestQuotePage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailPage />} />
          <Route path="production-capabilities" element={<ProductionCapabilitiesPage />} />
          <Route path="quality-standards" element={<QualityStandardsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="request-quote" element={<RequestQuotePage />} />
        </Route>
      </Routes>
      
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </>
  )
}

export default App