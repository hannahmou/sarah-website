import SectionHeader from '../SectionHeader'

export default function StablePayInsights() {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="mx-auto mt-16 max-w-screen-lg px-12">
                <SectionHeader number="004" title="INSIGHTS" />
                <div className="grid grid-flow-col grid-cols-2">
                    <div>
                        <h1 className="mt-12 font-interTight text-4xl font-medium">
                            Cryptocurrencies carry this stigma...
                        </h1>
                        <div className="pt-10 font-interTight font-light text-[#838588]">
                            <p>
                                We discovered that those with little to no prior
                                experience with crypto often believe anything
                                related to it seems intimidating, frightening,
                                and highly risky.
                            </p>
                            <br />
                            <p className="text-xl font-medium text-black">
                                It all stems down to a{' '}
                                <span className="text-[#73806D]">
                                    lack of knowledge{' '}
                                </span>
                                and a{' '}
                                <span className="text-[#73806D]">
                                    lack of trust
                                </span>
                                .
                            </p>
                            <br />
                            <p className="pb-20 font-normal text-black">
                                We strive to dispel that stereotype and make
                                Web3, specifically stablecoins, feel safe,
                                secure, and straightforward with our education
                                module.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            className="p-12"
                            src="images\Stablepay\poloneix.png"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
