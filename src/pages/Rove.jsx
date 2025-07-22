import Footer from '../components/Footer'
import RoveIntro from '../components/Rove/roveIntro.jsx'
import Navbar from '../components/Navbar'
import RoveLanding from '../components/Rove/roveLanding.jsx'

export default function Rove() {
    return (
        <div>
            <Navbar />
            <RoveIntro />
            <RoveLanding />
            <Footer />
        </div>
    )
}
