import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CV from './pages/CV.jsx'
import Work from './pages/Work.jsx'
import Contact from './components/Contact.jsx'
import './App.css'
import About from './pages/About.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Navbar /> {/* Navbar is always visible */}
            <Routes>
                <Route path="/" element={<Work />} /> {/* Home route */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
