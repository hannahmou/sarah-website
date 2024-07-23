import SectionHeader from '../SectionHeader'

export default function StablepayTrust() {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="mx-auto mt-16 max-w-screen-lg px-12">
                <SectionHeader number="006" title="TRUST AND TRANSPARENCY" />
                <div>
                    <h1 className="mt-12 pb-3 font-interTight text-5xl font-medium">
                        Clear data, clear transactions.
                    </h1>
                    <p className="text-[#838588]mt-2 font-interTight text-2xl font-light">
                        Easily access and visualize data, all at your
                        fingertips. Experience transparency without the feeling
                        of being overwhelmed.
                    </p>
                </div>
            </div>
            <div>
                <img
                    className="mx-auto w-full pt-20"
                    src="images\Stablepay\stablepayChart.png"
                />
            </div>
            <div className="mx-auto mt-16 max-w-screen-lg px-12">
                <div>
                    <h1 className="mt-36 font-interTight text-4xl font-medium">
                        Visualize, simplify, beautify.{' '}
                    </h1>
                    <p className="mt-2 pt-2 font-interTight text-2xl font-light leading-relaxed text-[#838588]">
                        Using graphs to display data rather than solely numbers
                        allows beautiful visualizations that are both visually
                        striking and easy to interpret. Our approach focuses on
                        simplifying complexity while enhancing aesthetic appeal,
                        ensuring data is not only informative but also visually
                        captivating.
                    </p>
                    <img
                        className="pb-36 pt-8"
                        src="images\Stablepay\stablepayInitial.png"
                    ></img>
                </div>
            </div>
        </div>
    )
}
