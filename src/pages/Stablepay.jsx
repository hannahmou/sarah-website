import Footer from '../components/Footer'
import StablepayIntro from '../components/StablepayIntro'
import Navbar from '../components/Navbar'
import StablepaySummary from '../components/StablepaySummary'
import StablepayBackground from '../components/StablepayBackground'
import StablePayProblem from '../components/StablepayProblem'
import StablePayInsights from '../components/StablepayInsights'
import StablepayLack from '../components/StablepayLack'
import StablepayTrust from '../components/StablepayTrust'
import StablepayDifferent from '../components/StablepayDifferent'
import StablepayConclusion from '../components/StablepayConclusion'

export default function Stablepay() {
    return (
        <div>
            <Navbar />
            <StablepayIntro />
            <StablepaySummary />
            <StablepayBackground />
            <StablePayProblem />
            <StablePayInsights />
            <StablepayLack />
            <StablepayTrust />
            <StablepayDifferent />
            <StablepayConclusion />
            <Footer />
        </div>
    )
}
