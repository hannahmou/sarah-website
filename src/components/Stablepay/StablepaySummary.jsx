import SectionHeader from '../SectionHeader'

export default function StablepaySummary() {
    return (
        <div>
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="001" title="SUMMARY" />

                <h1 className="mt-5 font-interTight text-5xl font-light">
                    Automatically convert fiat currency to stablecoins for daily
                    transactions, earn rewards, and track spending --for
                    businesses and consumers.
                </h1>
                <img
                    className="mx-auto mt-16"
                    src="images/Stablepay/stablePay2Laptops.png"
                    alt="StablePay 2 Laptops"
                />
                <h2 className="pt-36 text-center font-interTight text-4xl">
                    Streamlined analytics
                </h2>
                <p className="text-center font-interTight text-xl text-[#838588]">
                    Visualizing insightful analysis of spending and earning
                    habits to design an intuitive experience.
                </p>
            </div>
            <div className="w-full">
                <img
                    className="mt-8 w-full object-cover"
                    src="images/Stablepay/stablePayModules.png"
                    alt="StablePay Modules"
                />
            </div>
            <div className="mx-auto mt-36 grid grid-cols-2 items-center">
                <img
                    className="h-auto w-full"
                    src="images/Stablepay/stablepayPurchaseLaptop.png"
                    alt="StablePay Purchase Laptop"
                />
                <div className="m-4 flex max-w-screen-lg flex-col justify-center pr-8">
                    <h1 className="font-interTight text-5xl">
                        Seamless integration
                    </h1>
                    <p className="mr-32 mt-4 max-w-screen-lg pr-8 font-interTight text-base">
                        Save money while conducting seamless transactions with
                        your favorite stores using stablecoins as a reliable and
                        convenient payment method.
                    </p>
                </div>
            </div>
        </div>
    )
}
