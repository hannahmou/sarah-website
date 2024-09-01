import { Link } from 'react-router-dom'

export default function Footer() {
    const onCVClick = () => {
        window.open('public/Sarah_Mou_Resume.pdf')
    }
    return (
        <div className="mx-auto mt-16 max-w-screen-lg">
            <hr className="mx-8 pb-5"></hr>
            <div className="my-8">
                <div className="float-left list-none pb-14 pl-8">
                    <li className="float-left font-highTower text-3xl font-medium italic -tracking-[0.06em] text-black">
                        Get in touch!
                    </li>
                    <li className="flex-row font-interTight text-base">
                        sarahmou@berkely.edu
                    </li>
                </div>
                <div className="list-none pr-8 text-right font-interTight text-base font-light leading-relaxed text-black">
                    <li className="flex-row">
                        <a
                            href="https://www.linkedin.com/in/sarahmou/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li className="flex-row">
                        <a
                            href="#"
                            onClick={onCVClick}
                            className="transition duration-300 hover:text-gray-500"
                        >
                            CV
                        </a>
                    </li>
                </div>
            </div>
        </div>
    )
}
