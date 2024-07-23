import SectionHeader from '../SectionHeader'

export default function FoodchainDecisions() {
    return (
        <div>
            <div className="bg-[#F6F6F6]">
                <div className="mx-auto mt-16 max-w-screen-lg px-12">
                    <SectionHeader number="004" title="DECISIONS" />
                    <div>
                        <h1 className="mt-12 font-interTight text-4xl font-medium">
                            Deliberate, intentional design{' '}
                        </h1>
                        <div className="py-16 pt-8 font-interTight text-xl font-light text-[#838588]">
                            <p>
                                Making conscious choices about placement and the
                                design of elements creates a more cohesive,
                                impactful, and beautiful experience for the
                                user.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="mx-auto"
                src="images/Foodchain/foodchainDashboard.png"
            />
            <div className="bg-[#F6F6F6]">
                <div className="mx-auto mt-16 max-w-screen-lg px-12">
                    <div>
                        <h1 className="pt-16 font-interTight text-3xl font-medium">
                            Designing for the user{' '}
                        </h1>
                        <div className="py-16 pt-2 font-interTight text-xl font-light">
                            <p>
                                Switching from my initial draft to my second, I
                                made several changes to enhance user experience
                                and functionality. For instance, I replaced the
                                circular scan button with a full-width bar
                                anchored at the bottom navbar, which improved
                                navigation and usability. This, along with other
                                modifications, created a more intuitive
                                interface.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
