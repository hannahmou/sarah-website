import SectionHeader from './SectionHeader'

export default function StablePayProblem() {
    return (
        <div className="mx-auto mt-16 max-w-screen-lg px-12">
            <SectionHeader number="003" title="PROBLEM" />
            <div>
                <h1 className="mt-12 font-interTight text-4xl font-medium">
                    Why do stablecoins not see more widespread use in finance?{' '}
                </h1>
                <p className="te align-middlext-xl mt-2 font-interTight text-2xl font-light text-[#838588]">
                    After conducting user interviews, our team came up with
                    three core factors.
                </p>
            </div>
            <div className="mt-12 grid grid-flow-col grid-cols-3">
                <div>
                    <div className="flex items-center">
                        <img
                            className="flex-box h-8"
                            src="images/thumbsDown.png"
                        />
                        <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                            Lack of trust
                        </h2>
                    </div>
                    <p className="pr-12 font-interTight text-base text-[#838588]">
                        Volatile prices hinder widespread adoption and trust as
                        a reliable means of transaction and value storage.
                    </p>
                </div>
                <div>
                    <div className="flex items-center">
                        <img className="flex-box h-8" src="images/pig.png" />
                        <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                            Limited liquidity
                        </h2>
                    </div>
                    <p className="pr-12 font-interTight text-base text-[#838588]">
                        Lack of issuers restricts their growth and
                        accessibility, preventing them from reaching a broader
                        user base.
                    </p>
                </div>
                <div>
                    <div className="flex items-center">
                        <img className="flex-box h-8" src="images\cloudX.png" />
                        <h2 className="m-4 pr-12 align-middle font-interTight text-xl font-medium">
                            Poor integration
                        </h2>
                    </div>
                    <p className="pr-12 font-interTight text-base text-[#838588]">
                        Payment infrastructure gaps, limited education, and user
                        experience challenges hinder their adoption.
                    </p>
                </div>
            </div>
            <div>
                <p className="pt-20 font-interTight text-xl font-light leading-tight">
                    Data collected from:
                </p>
                <div className="grid grid-flow-col grid-cols-3">
                    <div className="row-span-2">
                        <h1 className="pt-4 font-interTight text-9xl font-medium text-[#2B3B32]">
                            23
                        </h1>
                        <h3 className="pt-4 font-interTight text-3xl leading-tight text-[#838588]">
                            total user interviews conducted
                        </h3>
                    </div>
                    <div>
                        <h1 className="mt-8 font-interTight text-7xl font-medium text-[#2B3B32]">
                            6
                        </h1>
                        <div className="flex w-64 items-center rounded-full bg-[#F6F6F6]">
                            <p className="p-4 align-middle font-interTight leading-tight text-[#838588]">
                                crypto users not utilizing stablecoins
                            </p>
                            <img
                                className="overflow-visible rounded-full bg-[#2B3B32] p-4"
                                src="images\personHeart.png"
                            />
                        </div>
                        <div className="mt-8 border-b-2"></div>
                    </div>
                    <div>
                        <h1 className="pt-10 font-interTight text-7xl font-medium text-[#2B3B32]">
                            4
                        </h1>
                        <div className="flex w-64 items-center rounded-full bg-[#F6F6F6]">
                            <p className="p-4 align-middle font-interTight leading-tight text-[#838588]">
                                local businesses not utilizing stablecoins
                            </p>
                            <img
                                className="overflow-visible rounded-full bg-[#2B3B32] p-4"
                                src="images\shop.png"
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className="mt-8 font-interTight text-7xl font-medium text-[#2B3B32]">
                            9
                        </h1>
                        <div className="flex w-64 items-center rounded-full bg-[#F6F6F6]">
                            <p className="p-4 align-middle font-interTight leading-tight text-[#838588]">
                                new cryptocurrency users
                            </p>
                            <img
                                className="overflow-visible rounded-full bg-[#2B3B32] p-4"
                                src="images\personPlus.png"
                            />
                        </div>
                        <div className="mt-8 border-b-2"></div>
                    </div>
                    <div>
                        <h1 className="pt-10 font-interTight text-7xl font-medium text-[#2B3B32]">
                            4
                        </h1>
                        <div className="flex w-64 items-center rounded-full bg-[#F6F6F6]">
                            <p className="p-4 align-middle font-interTight leading-tight text-[#838588]">
                                enterprises / financial institutions{' '}
                            </p>
                            <img
                                className="overflow-visible rounded-full bg-[#2B3B32] p-4"
                                src="images\shop.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
