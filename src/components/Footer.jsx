import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="mx-auto max-w-screen-lg">
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
                        <Link to="/work">LinkedIn</Link>
                    </li>
                    <li className="flex-row">
                        <Link to="/CV">CV</Link>
                    </li>
                </div>
            </div>
        </div>
    )
}
