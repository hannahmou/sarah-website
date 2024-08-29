import RekWellCaltopia from '../components/BerkeleyRekWell/rekwellCaltopia'
import RekWellIntro from '../components/BerkeleyRekWell/rekwellIntro'
import RekWellMarchMadness from '../components/BerkeleyRekWell/rekwellMarch'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function BerkeleyRekWell() {
    return (
        <div>
            <Navbar />
            <RekWellIntro />
            <RekWellMarchMadness />
            <RekWellCaltopia />
            <Footer />
        </div>
    )
}
