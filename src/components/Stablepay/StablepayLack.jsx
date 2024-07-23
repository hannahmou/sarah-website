import SectionHeader from '../SectionHeader'

export default function StablepayLack() {
    return (
        <div className="mx-auto mt-16 max-w-screen-lg px-12">
            <SectionHeader number="005" title="LACK OF KNOWLEDGE" />
            <div>
                <h1 className="mt-12 font-interTight text-4xl font-medium">
                    Learn more, right in the app.
                </h1>
                <p className="mt-8 pb-12 font-interTight text-2xl font-light text-[#838588]">
                    Say goodbye to complex, buzzword-heavy articles. Instead,
                    get your information through straightforward articles,
                    videos, and interactive tutorials.
                </p>
            </div>
            <div>
                <img src="images\Stablepay\stablePayAI.png"></img>
            </div>
            <div className="mx-auto max-w-screen-lg px-12 pt-12">
                <img src="images\Stablepay\stablepayOnScreen.png" />
                <h3 className="font-interTight text-3xl font-medium">
                    On-screen content versus tabs
                </h3>
                <p className="mt-4 font-interTight text-2xl font-light leading-relaxed">
                    While placing educational content in a tab allows for more
                    space, it hides the material from the home screen and
                    discourages engagement, which contradicts our goals.
                    Therefore, we chose to allocate the entire right-hand side
                    of the home page for educational content.
                </p>
            </div>
        </div>
    )
}
