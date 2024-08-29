import CalEsportsGame from '../components/CalEsports/calesportsGame'
import CalEsportsGeneral from '../components/CalEsports/calesportsGeneral'
import CalEsportsIntro from '../components/CalEsports/calesportsIntro'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function CalEsports() {
    return (
        <div>
            <Navbar />
            <CalEsportsIntro />
            <CalEsportsGame />
            <CalEsportsGeneral />
            <Footer />
        </div>
    )
}
