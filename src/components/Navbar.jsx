import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="absolute right-0 top-0 pr-96 text-right font-interTight lg:pt-48">
            <ul className="text-md font-medium leading-[35.19px] text-black md:text-[25px]">
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
    )
}
