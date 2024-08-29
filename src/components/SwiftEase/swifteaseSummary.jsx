import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

export default function SwiftEaseSummary() {
    return (
        <div>
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="001" title="SUMMARY" />
                <SectionTitle title="The all new “Taylor’s Version” of a ticket platform. Buy concert tickets with ease." />
                <img
                    className="mx-auto mt-16"
                    src="public\images\SwiftEase\swifteaseSummary.png"
                    alt="StablePay 2 Laptops"
                />
                <h2 className="pt-36 text-center font-interTight text-4xl">
                    Streamlined merch store
                </h2>
                <p className="text-center font-interTight text-xl text-[#838588]">
                    View your favorite t-shirts, hoodies, and other merchandise
                    easily with enlarged photos and simplified UI.
                </p>
            </div>
            <div className="w-full">
                <img
                    className="mt-8 w-full object-cover"
                    src="public\images\SwiftEase\swifteaseMerch.png"
                    alt="StablePay Modules"
                />
            </div>
            <div className="mx-auto mt-36 grid grid-cols-2 items-center">
                <div className="m-4 mr-8 flex max-w-screen-lg flex-col justify-center pr-8">
                    <h1 className="text-right font-interTight text-5xl">
                        Seamless integration
                    </h1>
                    <p className="mt-4 max-w-screen-lg text-right font-interTight text-base">
                        Save money while conducting seamless transactions with
                        your favorite stores using stablecoins as a reliable and
                        convenient payment method.
                    </p>
                </div>
                <img
                    className="h-auto w-full"
                    src="public\images\SwiftEase\swifteaseTickets.png"
                    alt="StablePay Purchase Laptop"
                />
            </div>
        </div>
    )
}
