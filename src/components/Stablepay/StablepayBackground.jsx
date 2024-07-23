import SectionHeader from '../SectionHeader'

export default function StablepayBackground() {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="002" title="BACKGROUND" />
                <div>
                    <h1 className="mt-8 font-interTight text-4xl font-medium">
                        But first... what exactly are stablecoins?
                    </h1>
                    <p className="mt-2 font-interTight text-2xl font-light text-[#838588]">
                        Stablecoins are a type of cryptocurrency whose value is
                        pegged to another asset, such as a fiat currency or
                        gold, to maintain a stable price.
                    </p>
                </div>
                <div className="mx-auto mt-6 grid grid-cols-7 items-center bg-[#EEEEEE]">
                    <img
                        className="row-span-2 mx-8 my-8"
                        src="images\Stablepay\stablePayUSDC.png"
                    ></img>
                    <div className="col-span-6 mx-12">
                        <h2 className="mt-8 font-interTight text-2xl font-bold leading-9">
                            EXAMPLE: USDC
                        </h2>
                        <p className="mb-6 font-interTight text-xl font-normal leading-9">
                            USDC, a widely used stablecoin, maintains a value
                            pegged to the US dollar.{' '}
                            <span className="font-bold">
                                If the dollar's value decreases, so does that of
                                USDC.{' '}
                            </span>{' '}
                            Given the dollar's inherent stability, USDC also
                            remains relatively stable in value.
                        </p>
                    </div>
                </div>
                <div className="pb-32"></div>
            </div>
        </div>
    )
}
