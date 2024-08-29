import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

export default function SwiftEaseSimplify() {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="mx-auto mt-16 max-w-screen-lg px-8 pt-8">
                <SectionHeader
                    number="006"
                    title="SIMPLIFY, SIMPLIFY, SIMPLIFY"
                />
                <div className="">
                    <h1 className="mt-12 font-interTight text-4xl font-medium">
                        Simplified design ≠ simplified experience{' '}
                    </h1>
                    <p className="mt-4 font-interTight text-2xl font-light leading-[38px]">
                        For a baseline, I looked mainly at Ticketmaster’s site.
                        While their UI did the job, I found it overwhelming dnd
                        difficult to parse through all the information. When
                        redesigning my own site, I thought it important to let
                        the design parse through information on its own, letting
                        the user breeze through their selections.
                    </p>
                </div>
            </div>
            <div className="w-full pb-32">
                <img
                    className="mx-auto mt-16"
                    src="public\images\SwiftEase\swifteaseSimplify.png"
                    alt="StablePay 2 Laptops"
                />
            </div>
        </div>
    )
}
