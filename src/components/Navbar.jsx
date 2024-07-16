import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="relative mx-auto max-w-screen-lg">
            <nav className="absolute right-10 top-10 flex text-right font-interTight">
                <ul className="text-xl font-medium leading-tight text-black">
                    <li>
                        <Link to="/">WORK</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/cv">CV</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
