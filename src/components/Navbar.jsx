import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="float-right mt-[130px] text-right font-interTight">
            <ul className="text-right font-interTight text-[25px] font-medium leading-[35.19px] text-black">
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
