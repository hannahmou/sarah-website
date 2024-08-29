import Footer from '../components/Footer'
import LawLoopConclusion from '../components/LawLoop/lawloopConclusion'
import LawLoopIntro from '../components/LawLoop/lawloopIntro'
import LawLoopSummary from '../components/LawLoop/lawloopSummary'
import Navbar from '../components/Navbar'

export default function LawLoop() {
    return (
        <div>
            <Navbar />
            <LawLoopIntro />
            <LawLoopSummary />
            <LawLoopConclusion />
            <Footer />
        </div>
    )
}
