import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

export default function FoodchainSummary() {
    return (
        <div>
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="001" title="SUMMARY" />

                <SectionTitle
                    title="Effortlessly trace your food's journey from farm to plate,
                    ensuring its safety and quality—all right at your
                    fingertips, anytime you need."
                />
                <div className="grid grid-flow-col grid-cols-3 pb-3 pt-8">
                    <div>
                        <img src="images/Foodchain/foodchainPhoneGrid1.png"></img>
                    </div>
                    <div>
                        <img src="images/Foodchain/foodchainPhoneGrid2.png"></img>
                    </div>
                    <div>
                        <img src="images/Foodchain/foodchainPhoneGrid.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
