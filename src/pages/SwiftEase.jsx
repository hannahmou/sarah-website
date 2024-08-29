import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SwiftEaseConclusion from '../components/SwiftEase/swifteaseConclusion'
import SwiftEaseIntro from '../components/SwiftEase/swifteaseIntro'
import SwiftEasePersonalization from '../components/SwiftEase/swifteasePersonalization'
import SwiftEaseProblem from '../components/SwiftEase/swifteaseProblem'
import SwiftEasePrompt from '../components/SwiftEase/swifteasePrompt'
import SwiftEaseReadability from '../components/SwiftEase/swifteaseReadability'
import SwiftEaseSimplify from '../components/SwiftEase/swifteaseSimplify'
import SwiftEaseSummary from '../components/SwiftEase/swifteaseSummary'

export default function SwiftEase() {
    return (
        <div className="">
            <Navbar />
            <SwiftEaseIntro />
            <SwiftEaseSummary />
            <SwiftEasePrompt />
            <SwiftEaseProblem />
            <SwiftEaseReadability />
            <SwiftEasePersonalization />
            <SwiftEaseSimplify />
            <SwiftEaseConclusion />
            <Footer />
        </div>
    )
}
