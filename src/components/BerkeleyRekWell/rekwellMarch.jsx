import SectionHeader from '../SectionHeader'

export default function RekWellMarchMadness() {
    return (
        <div>
            <div className="">
                <div className="mx-auto mt-16 max-w-screen-lg px-12">
                    <SectionHeader
                        number="001"
                        title="MARCH MADNESS COMBINE EVENT"
                    />
                    <div>
                        <h1 className="mb-12 mt-4 font-interTight text-4xl">
                            March Madness Combine Event Posters
                        </h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#F6F6F6] py-16">
                <img
                    className="b mx-auto"
                    src="public\images\BerkeleyRekWell\rekwellMarch.png"
                />
            </div>
            <div className="bg-white p-8"></div>

            <div className="bg-[#F6F6F6] py-16">
                <img
                    className="b mx-auto"
                    src="public\images\BerkeleyRekWell\rekwellMarch2.png"
                />
            </div>
        </div>
    )
}
