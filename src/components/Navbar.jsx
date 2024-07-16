import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="float-right px-56 pt-32 text-right font-interTight">
            <ul className="text-md text-right font-interTight font-medium leading-[35.19px] text-black md:text-[25px]">
                <li>
                    <Link to="/work">WORK</Link>
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
