import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CV from './pages/CV.jsx'
import Work from './pages/Work.jsx'
import Contact from './components/Contact.jsx'
import Stablepay from './pages/Stablepay.jsx'
import About from './pages/About.jsx'
import Foodchain from './pages/Foodchain.jsx'
import Blueprint from './pages/Blueprint.jsx'
import SwiftEase from './pages/SwiftEase.jsx'
import CalEsports from './pages/CalEsports.jsx'
import BerkeleyRekWell from './pages/BerkeleyRecWell.jsx'
import LawLoop from './pages/LawLoop.jsx'
import Biddle from './pages/Biddle.jsx'
import Blockchain from './pages/Blockchain.jsx'
import MobileOnlyMessage from './MobileOnlyMessage.jsx'
import './App.css'

function App() {
    return (
        <div>
            <MobileOnlyMessage />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Work />} /> {/* Default route */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cv" element={<CV />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/stablepay" element={<Stablepay />} />
                    <Route path="/foodchain" element={<Foodchain />} />
                    <Route path="/blueprint" element={<Blueprint />} />
                    <Route path="/swiftease" element={<SwiftEase />} />
                    <Route path="/calesports" element={<CalEsports />} />
                    <Route
                        path="/berkeleyrekwell"
                        element={<BerkeleyRekWell />}
                    />
                    <Route path="/lawloop" element={<LawLoop />} />
                    <Route path="/biddle" element={<Biddle />} />
                    <Route path="/blockchain" element={<Blockchain />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
