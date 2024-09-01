import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

export default function LawLoopSummary() {
    return (
        <div>
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="001" title="SUMMARY" />

                <SectionTitle title="Find a lawyer, specific to your needs with the help of a personalized AI powered assistant. " />
                <img className="mt-16" src="images\LawLoop\lawloopLaptop.png" />
                <h2 className="pb-4 pt-36 text-center font-interTight text-4xl">
                    Let LawLoop demystify your files.{' '}
                </h2>
                <p className="pb-8 text-center font-interTight text-xl text-[#838588]">
                    Upload your legal documents and let LawLoop provide clear
                    explanations, backed by secure databases and protected
                    information.
                </p>
                <div className="mt-8 flex justify-center">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center">
                            <img
                                className="w-4"
                                src="images\Icons\attach_file.png"
                            />
                        </span>
                        <input
                            className="w-[500px] rounded-md border border-[#757575] p-3 pl-10 font-interTight text-xl font-bold leading-[35px] text-[#757575]"
                            defaultValue="Describe your case here..."
                        />
                    </div>
                </div>
            </div>
            <div className="mt-20 grid grid-flow-col grid-cols-2">
                <div>
                    <img src="images\LawLoop\lawloopNotif.png" />
                </div>
                <div className="mx-auto max-w-screen-lg px-8">
                    <h2 className="pb-4 pt-36 font-interTight text-4xl">
                        Get reminders of what’s important.
                    </h2>
                    <p className="pb-8 font-interTight text-xl text-[#838588]">
                        Get real-time updates of case updates, reminders of
                        court appearances, and lawyer connects.
                    </p>
                </div>
            </div>
        </div>
    )
}
