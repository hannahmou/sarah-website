import BiddleBackground from '../components/Biddle/biddleBackground'
import BiddleConclusion from '../components/Biddle/biddleConclusion'
import BiddleData from '../components/Biddle/biddleData'
import BiddleIntro from '../components/Biddle/biddleIntro'
import BiddleOrganizational from '../components/Biddle/biddleOrganizational'
import BiddleSummary from '../components/Biddle/biddleSummary'
import BiddleVisualization from '../components/Biddle/biddleVisualization'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Biddle() {
    return (
        <div className="">
            <Navbar />
            <BiddleIntro />
            <BiddleSummary />
            <BiddleBackground />
            <BiddleVisualization />
            <BiddleData />
            <BiddleOrganizational />
            <BiddleConclusion />
            <Footer />
        </div>
    )
}
