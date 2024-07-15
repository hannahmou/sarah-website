import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Contact from './components/Contact'
import { Route, Link } from 'react-router-dom'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Contact />
            <Header />
        </>
    )
}

export default App
