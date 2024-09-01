import SectionHeader from '../SectionHeader'

export default function BiddleBackground() {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="002" title="BACKGROUND" />
                <div>
                    <h1 className="mt-8 font-interTight text-4xl font-medium">
                        What’s the issue?{' '}
                    </h1>
                    <p className="mt-2 font-interTight text-2xl font-light">
                        Inside many fraternity or sororities, points are often
                        used to keep track of attendance, ____ or used as
                        rewards for various tasks. However, many organizations
                        typically use a simple Excel sheet to track each
                        individual’s points. This presents various challenges,
                        like:
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
                                Visualization issues
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            Excel lacks dynamic tools, making it difficult to
                            quickly see task status and Greek point
                            distribution, which can cause confusion and errors.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <img
                                className="flex-box h-8"
                                src="public\images\Icons\flash.png"
                            />
                            <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                                Data integrity
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            Multiple users and manual updates can lead to errors
                            and difficulties in verifying data accuracy,
                            affecting the reliability of the Greek points
                            system.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <img
                                className="flex-box h-8"
                                src="public\images\Icons\profile.png"
                            />
                            <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                                Organizational issues
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            Frequent updates and cancellations make it hard to
                            track responsibilities, leading to a cluttered and
                            confusing layout.
                        </p>
                    </div>
                </div>
                <div className="pb-32"></div>
            </div>
        </div>
    )
}
