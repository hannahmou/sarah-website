import SectionHeader from '../SectionHeader'

export default function FoodchainBackground() {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="002" title="BACKGROUND" />
                <div>
                    <h1 className="mt-8 font-interTight text-4xl font-medium">
                        So.. blockchain?{' '}
                    </h1>
                    <p className="mt-2 font-interTight text-2xl font-light">
                        FoodChain leverages blockchain technology to maintain an
                        immutable ledger of your food's journey. Thanks to
                        blockchain's unique features, records are tamper-proof,
                        transparent, and easily accessible—making it ideal for
                        tracking and ensuring food safety.
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
                                Immutable ledgers{' '}
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            Once a record is added, it cannot be altered or
                            deleted, providing a secure and reliable record.
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <img
                                className="flex-box h-8"
                                src="images/Icons/pig.png"
                            />
                            <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                                Transparency{' '}
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            All stakeholders are able to view the same data,
                            ensuring information about is openly accessible and
                            verifiable.{' '}
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <img
                                className="flex-box h-8"
                                src="images\Icons\cloudX.png"
                            />
                            <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                                Security
                            </h2>
                        </div>
                        <p className="pr-12 font-interTight text-base text-[#838588]">
                            Cryptographic techniques are used to secure data,
                            ensuring information is protected against tampering.
                        </p>
                    </div>
                </div>
                <div className="pb-32"></div>
            </div>
        </div>
    )
}
