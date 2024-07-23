import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import FoodchainIntro from '../components/Foodchain/FoodchainIntro'
import FoodchainSummary from '../components/Foodchain/FoodchainSummary'
import FoodchainBackground from '../components/Foodchain/foodchainBackground'
import FoodchainProblem from '../components/Foodchain/FoodchainProblem'
import FoodchainDecisions from '../components/Foodchain/foodchainDecisions'
import FoodchainConclusion from '../components/Foodchain/foodchainConclusion'
export default function Foodchain() {
    return (
        <div>
            <Navbar />
            <FoodchainIntro />
            <FoodchainSummary />
            <FoodchainBackground />
            <FoodchainProblem />
            <FoodchainDecisions />
            <FoodchainConclusion />
            <Footer />
        </div>
    )
}
