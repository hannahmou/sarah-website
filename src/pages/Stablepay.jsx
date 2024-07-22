import Footer from '../components/Footer'
import StablepayIntro from '../components/Stablepay/StablepayIntro'
import Navbar from '../components/Navbar'
import StablepaySummary from '../components/Stablepay/StablepaySummary'
import StablepayBackground from '../components/Stablepay/StablepayBackground'
import StablePayProblem from '../components/Stablepay/StablepayProblem'
import StablePayInsights from '../components/Stablepay/StablepayInsights'
import StablepayLack from '../components/Stablepay/StablepayLack'
import StablepayTrust from '../components/Stablepay/StablepayTrust'
import StablepayDifferent from '../components/Stablepay/StablepayDifferent'
import StablepayConclusion from '../components/Stablepay/StablepayConclusion'

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
