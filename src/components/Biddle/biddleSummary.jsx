import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

export default function BiddleSummary() {
    return (
        <div>
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="001" title="SUMMARY" />

                <SectionTitle title="Easily view and comprehend tasks with distinct visuals delineating categories. Sign up with just a swipe or a touch of a button." />
                <div className="[] grid grid-flow-col grid-cols-3 pb-3 pt-8">
                    <div className="p-4">
                        <img src="public\images\Biddle\biddleIphone1.png"></img>
                    </div>
                    <div className="p-4">
                        <img src="public\images\Biddle\biddleIphone2.png"></img>
                    </div>
                    <div className="p-4">
                        <img src="public\images\Biddle\biddleIphone3.png"></img>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-cols-2 py-10">
                    <div>
                        <img
                            className="mx-auto h-[600px]"
                            src="public\images\Biddle\biddleRed.png"
                        />
                    </div>
                    <div className="my-auto">
                        <h1 className="font-interTight text-2xl font-medium leading-[50px]">
                            Sign up and edit events with ease.
                        </h1>
                        <p className="font-interTight font-light">
                            Simply swipe or tap the button to sign up for
                            events. Easily find your commitments in the profile
                            tab, and simply edit your attendance if necessary.
                        </p>
                    </div>
                </div>
                <div className="grid grid-flow-col grid-cols-2">
                    <div className="my-auto text-right">
                        <h1 className="font-interTight text-2xl font-medium leading-[50px]">
                            Create tasks using intuitive input fields.
                        </h1>
                        <p className="font-interTight font-light">
                            Easily create tasks with our user-friendly
                            interface, featuring intuitive input fields that
                            simplify the task management process.
                        </p>
                    </div>
                    <div>
                        <img
                            className="mx-auto h-[600px]"
                            src="public\images\Biddle\biddleEvents.png"
                        />
                    </div>
                </div>

                <div>
                    <img src="" />
                </div>
            </div>
        </div>
    )
}
