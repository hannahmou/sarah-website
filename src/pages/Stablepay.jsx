import Footer from '../components/Footer'
import IntroStablepay from '../components/IntroStablepay'
import Navbar from '../components/Navbar'

export default function Stablepay() {
    return (
        <div className="">
            <Navbar />
            <div className="clear-both">
                <IntroStablepay />
            </div>
            <Footer />
        </div>
    )
}
