import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CV from './pages/CV.jsx'
import Work from './pages/Work.jsx'
import Contact from './components/Contact.jsx'
import Stablepay from './pages/Stablepay.jsx'
import './App.css'
import About from './pages/About.jsx'

function App() {
    const [count, setCount] = useState(0)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Work />} /> {/* Home route */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/stablepay" element={<Stablepay />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
