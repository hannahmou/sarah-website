import SectionHeader from '../SectionHeader'

export default function SwiftEasePrompt() {
    return (
        <div className="bg-[#F6F6F6]">
            <div className="mx-auto mt-32 max-w-screen-lg px-8">
                <SectionHeader number="002" title="THE PROMPT" />
                <div>
                    <h1 className="mt-8 font-interTight text-4xl font-medium">
                        Revamping the relationship between artists and their
                        concerts{' '}
                    </h1>
                    <p className="mt-2 font-interTight text-2xl font-light leading-[38px]">
                        <div>
                            Taylor Swift’s Eras Tour shattered records not only
                            for its size and scale but also for its
                            unprecedented ticket sales, moving over 2.4 million
                            tickets in just one day.
                        </div>
                        <br></br>
                        However, given the controversy surrounding Ticketmaster,
                        Taylor’s primary ticketing partner, why not create a
                        dedicated, personalized site exclusively for Swifities?
                        This would streamline the ticket-buying experience and
                        address the frustrations fans have faced.
                    </p>
                </div>

                <div className="pb-28"></div>
            </div>
        </div>
    )
}
