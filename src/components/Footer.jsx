import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <hr className="pb-5 sm:pt-0 md:mx-10 lg:mx-28"></hr>
            <div className="my-7">
                <div className="float-left list-none pb-[120px] md:mx-12 lg:mx-32">
                    <li className="float-left mb-[7px] font-highTower text-[32px] font-medium italic -tracking-[0.06em] text-black">
                        Get in touch!
                    </li>
                    <li className="flex-row font-interTight text-[20px]">
                        sarahmou@berkely.edu
                    </li>
                </div>
                <div className="list-none text-right font-interTight text-[25px] font-light leading-[35.19px] text-black md:mx-12 lg:mx-32">
                    <li className="flex-row pt-[10px]">
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
