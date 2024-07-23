import SectionHeader from '../SectionHeader'

export default function FoodchainProblem() {
    return (
        <div className="mx-auto mt-16 max-w-screen-lg px-12">
            <SectionHeader number="003" title="PROBLEM" />
            <div>
                <h1 className="mt-12 font-interTight text-4xl font-medium">
                    Back and forth, over and over.{' '}
                </h1>
                <p className="mt-8 pb-12 font-interTight text-2xl font-light text-[#838588]">
                    While designing this app, I made countless revisions, even
                    completing an entire hi-fi design only to scrap it upon
                    completion. However, this ultimately proved beneficial for
                    my design, reinforcing my belief that the process is just as
                    important as the final result.
                </p>
            </div>
            <div className="mx-auto max-w-screen-lg">
                <img src="images\Foodchain\foodchainMood.png" />
                <h3 className="pt-8 font-interTight text-3xl font-medium">
                    Understanding the importance of style{' '}
                </h3>
                <p className="mt-4 font-interTight text-2xl font-light leading-relaxed">
                    My initial designs consisted of a more vibrant style,
                    featuring hand-drawn elements and titles, saturated colors,
                    and a bright yellow main color, inspired by the vibrant
                    colors of food and it’s many flavors.
                </p>
            </div>
            <div className="grid grid-flow-col grid-cols-2">
                <div>
                    <div className="pr-24 pt-10 font-interTight text-xl font-light">
                        <p>
                            However, especially when making the alerts, it was
                            difficult to balance the severity of the idea that
                            your food has been contaminated with food and it’s
                            playful feel.
                        </p>
                        <br />
                        <p className="text-xl font-medium text-black">
                            This, combined with the sketchy style of the images
                            making the visuals feel a bit messy and incomplete,
                            made me realize I needed to switch directions.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className=""
                        src="images\Foodchain\foodchainEcoli.png"
                    />
                </div>
            </div>
            <div className="mx-auto max-w-screen-lg">
                <h3 className="pt-8 font-interTight text-3xl font-medium">
                    Making the switch{' '}
                </h3>
                <p className="pb-8 pt-2 font-interTight text-xl font-light">
                    It was difficult to scrap all the work I had already put in,
                    but it was ultimately for the better. I decided to switch to
                    images rather than drawings, and preserved the playful feel
                    with gradients.
                </p>
                <img src="images\Foodchain\foodchainOldTheme.png" />
            </div>
        </div>
    )
}
