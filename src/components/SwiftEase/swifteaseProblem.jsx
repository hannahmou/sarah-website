import SectionHeader from '../SectionHeader'

export default function SwiftEaseProblem() {
    return (
        <div className="">
            <div className="mx-auto mt-16 max-w-screen-lg px-8">
                <SectionHeader number="003" title="PROBLEM" />
                <div>
                    <h1 className="mt-8 font-interTight text-4xl font-medium">
                        The problems with traditional ticket sites...
                    </h1>
                    <p className="mt-2 font-interTight text-2xl font-light">
                        After examining other popular sites, here are some
                        problems I encountered.
                    </p>
                </div>
                <div className="mt-12 grid grid-flow-col grid-cols-3">
                    <div>
                        <div className="flex items-center">
                            <img
                                className="flex-box h-8"
                                src="images/Icons/thumbsDown.png"
                            />
                            <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                                Poor readability{' '}
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            Ticket prices are listed in a text heavy list
                            format, where information can become overwhelming
                            and difficult to interpret.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <img
                                className="flex-box h-8"
                                src="public\images\Icons\paint.png"
                            />
                            <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                                Lack of personalization
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            All ticket pages for different artists tend to look
                            the same, making the concert experience feel
                            impersonal and generic.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <img
                                className="flex-box h-8"
                                src="images\Icons\cloudX.png"
                            />
                            <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                                No merch integration
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            Ticket sites are perfect areas for merch
                            integration, yet most merchandise sites are located
                            on a separate website.
                        </p>
                        y
                    </div>
                </div>
                <img
                    className="mt-8 h-max w-max"
                    src="public\images\SwiftEase\swifteaseTicketMaster.png"
                />
                <div className="pb-16"></div>
            </div>
        </div>
    )
}
