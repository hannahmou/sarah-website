import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <hr className="mx-[100px] pb-[40px]"></hr>
            <div className="my-[20px]">
                <div className="float-left mx-[100px] list-none pb-[120px]">
                    <li className="float-left mb-[7px] font-highTower text-[36px] font-medium italic -tracking-[0.06em] text-black">
                        Get in touch!
                    </li>
                    <li className="flex-row font-interTight text-[22px]">
                        sarahmou@berkely.edu
                    </li>
                </div>
                <div className="mx-[100px] list-none text-right font-interTight text-[25px] font-light leading-[35.19px] text-black">
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
