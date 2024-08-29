import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CV from './pages/CV.jsx'
import Work from './pages/Work.jsx'
import Contact from './components/Contact.jsx'
import Stablepay from './pages/Stablepay.jsx'
import './App.css'
import About from './pages/About.jsx'
import Foodchain from './pages/Foodchain.jsx'
import Blueprint from './pages/Blueprint.jsx'
import SwiftEase from './pages/SwiftEase.jsx'
import CalEsports from './pages/CalEsports.jsx'
import BerkeleyRekWell from './pages/BerkeleyRecWell.jsx'
import LawLoop from './pages/LawLoop.jsx'

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
                <Route path="/foodchain" element={<Foodchain />} />
                <Route path="/blueprint" element={<Blueprint />} />
                <Route path="/swiftease" element={<SwiftEase />} />
                <Route path="/calesports" element={<CalEsports />} />
                <Route path="/berkeleyrekwell" element={<BerkeleyRekWell />} />
                <Route path="/lawloop" element={<LawLoop />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
