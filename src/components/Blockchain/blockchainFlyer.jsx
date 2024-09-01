import SectionHeader from '../SectionHeader'

export default function BlockchainFlyer() {
    return (
        <div>
            <div className="">
                <div className="mx-auto mt-16 max-w-screen-lg px-12">
                    <SectionHeader number="001" title="FLYER" />
                    <div>
                        <h1 className="mb-12 mt-4 font-interTight text-4xl">
                            B@B Recruitment Flyer
                        </h1>
                    </div>
                </div>
            </div>
            <div className="pb-16">
                <img
                    className="mx-auto w-[700px]"
                    src="images\Blockchain\blockchainFlyer.png"
                />
            </div>
            <div className="bg-[#F6F6F6]">
                <p className="pb-8 pt-16 text-center font-interTight">
                    Some IRL photos :D
                </p>
                <img
                    className="mx-auto max-w-screen-lg px-12 pb-4"
                    src="images\Blockchain\blockchainFlyerIRL.png"
                />
                <p className="mx-auto max-w-screen-lg px-12 pb-16 text-right font-interTight">
                    (S/O to Aly, Megan, and Riddhi!)
                </p>
            </div>
        </div>
    )
}
