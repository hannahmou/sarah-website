import SectionHeader from '../SectionHeader'

export default function RekWellCaltopia() {
    return (
        <div>
            <div className="">
                <div className="mx-auto mt-16 max-w-screen-lg px-12">
                    <SectionHeader number="002" title="CALTOPIA 2024" />
                    <div>
                        <h1 className="mb-12 mt-4 font-interTight text-4xl">
                            RecWell Event Guide Ads{' '}
                        </h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#F6F6F6] py-16">
                <img
                    className="mx-auto"
                    src="images\BerkeleyRekWell\rekwellAds.png"
                />
            </div>
            <div className="bg-white p-8">
                <div>
                    <h1 className="mx-auto mt-20 max-w-screen-lg px-12 font-interTight text-4xl">
                        XFINITY Tote Designs
                    </h1>
                </div>
            </div>
            <div className="bg-[#F6F6F6] py-16">
                <img
                    className="mx-auto px-32"
                    src="images\BerkeleyRekWell\rekwellTote.png"
                />
            </div>

            <div className="bg-white p-8">
                <div>
                    <h1 className="mx-auto mt-20 max-w-screen-lg px-12 font-interTight text-4xl">
                        RecWell & Caltopia Rally Towels{' '}
                    </h1>
                </div>
            </div>
            <div className="bg-[#F6F6F6] py-16">
                <img
                    className="mx-auto px-32"
                    src="images\BerkeleyRekWell\rekwellTowelFinal.png"
                />
                <p className="mt-4 text-center font-interTight text-[#838588]">
                    Final chosen designs
                </p>
            </div>
            <div className="bg-white p-6"></div>
            <div className="bg-[#F6F6F6] py-16">
                <img
                    className="mx-auto px-32"
                    src="images\BerkeleyRekWell\rekwellTowelInitial.png"
                />
                <p className="mt-4 text-center font-interTight text-[#838588]">
                    Initial designs
                </p>
            </div>
        </div>
    )
}
