import BlueprintConclusion from '../components/Blueprint/blueprintConclusion'
import BlueprintIntro from '../components/Blueprint/blueprintIntro'
import BlueprintOverview from '../components/Blueprint/blueprintOverview'
import BluePrintSummary from '../components/Blueprint/blueprintSummary'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Blueprint() {
    return (
        <div className="">
            <Navbar />
            <BlueprintIntro />
            <BluePrintSummary />
            <BlueprintOverview />
            <BlueprintConclusion />
            <Footer />
        </div>
    )
}
