import Navbar from '../Navbar'

export default function CalEsportsIntro() {
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#003262]/20 to-transparent pb-52 pt-64">
                    <div className="inline w-full justify-center pt-[70px]">
                        <img
                            className="mx-auto w-[500px]"
                            src="images\calEsports.png"
                            alt="Stablepay Desktop"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-screen-lg px-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="pb-14 font-highTower text-8xl -tracking-[0.06em]">
                            Cal Esports
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                <div>
                                    As a part of UC Berkeley’s Business
                                    Development program, I helped run and manage
                                    Cal Esports’ social media presence across
                                    platforms like Instagram, Facebook, and
                                    Twitter, as well as their monthly
                                    newsletter.
                                </div>
                                <br></br>
                                Here's some highlights of my work there!
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Timeline
                            </h4>
                            <p className="font-interTight font-light">
                                Jan 2024 - Current{' '}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-6">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Team
                            </h4>
                            <div className="font-interTight font-light">
                                <p>Sarah Mou</p>
                                <p>Valerie Dumdum</p>
                                <p>Angelina Wu</p>
                                <p>Vivienne Lin</p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center pt-12 font-interTight text-base text-[#838588]">
                        Blockchain @ Berkeley
                    </div>

                    <div className="col-span-1 pl-6">
                        <h4 className="font-interTight text-xl font-semibold leading-6 text-black">
                            Disciplines
                        </h4>
                        <div className="font-interTight text-base font-light text-black">
                            <p>Print Design</p>
                            <p>Social Media</p>
                            <p>Advertising</p>
                            <p>Event Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
