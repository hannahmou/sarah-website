import { Link } from 'react-router-dom'

export default function Navbar() {
    const onCVClick = () => {
        window.open('public/Sarah_Mou_Resume.pdf')
    }

    return (
        <div className="relative mx-auto max-w-screen-lg">
            <nav className="absolute right-10 top-10 flex text-right font-interTight">
                <ul className="space-x-6 text-xl font-medium leading-tight text-black">
                    <li>
                        <Link
                            to="/"
                            className="transition duration-300 hover:text-gray-500"
                        >
                            WORK
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className="transition duration-300 hover:text-gray-500"
                        >
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={onCVClick}
                            className="transition duration-300 hover:text-gray-500"
                        >
                            CV
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
