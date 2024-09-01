import SectionHeader from '../SectionHeader'

export default function BiddleData() {
    return (
        <div>
            <div className="bg-[#F6F6F6] pb-12">
                <div className="mx-auto mt-16 max-w-screen-lg px-12">
                    <SectionHeader number="004" title="DATA INTEGRITY" />
                    <div>
                        <h1 className="mt-12 font-interTight text-4xl font-medium">
                            Rest assured, your data is secure
                        </h1>
                        <div className="py-16 pt-8 font-interTight text-xl font-light text-[#838588]">
                            <p>
                                Have the choice to become a leader or a member
                                with passcode protected access, simplifying the
                                UI and securing your data.
                            </p>
                        </div>
                    </div>
                </div>
                <img
                    className="mx-auto bg-white p-8 px-12"
                    src="public\images\Biddle\biddleData.png"
                />
            </div>
        </div>
    )
}
