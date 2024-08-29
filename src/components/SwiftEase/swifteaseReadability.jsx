import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

export default function SwiftEaseReadability() {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="mx-auto mt-16 max-w-screen-lg px-8 pt-8">
                <SectionHeader number="004" title="READABILITY" />
                <div className="grid grid-flow-col grid-cols-2">
                    <div className="col-span-1">
                        <h1 className="mt-8 font-interTight text-4xl font-medium">
                            Making it visual{' '}
                        </h1>
                        <p className="mt-8 font-interTight text-2xl font-light leading-[38px]">
                            <div>
                                By featuring photos of the venues, I aim to not
                                only increase familiarity and recognition but
                                also actively engage potential attendees.
                            </div>
                            <br></br>
                            This visual representation helps create a tangible
                            connection with the event, making it more appealing
                            and compelling for users. I hope to foster a sense
                            of excitement and urgency, encouraging a stronger
                            commitment to attending the concert while also
                            making it more visually interesting.
                        </p>
                    </div>
                    <img
                        className="mx-auto mt-16"
                        src="public\images\SwiftEase\swifteaseEvents.png"
                        alt="StablePay 2 Laptops"
                    />
                </div>
            </div>
            <div className="w-full pb-32">
                <img
                    className="mt-8 w-full object-cover"
                    src="public\images\SwiftEase\swifteaseTicketScroll.png"
                    alt="StablePay Modules"
                />
            </div>
        </div>
    )
}
