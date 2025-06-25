import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/SiteFooter'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
