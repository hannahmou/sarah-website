export default function SwiftEaseIntro() {
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#E0A4D1]/50 to-transparent pt-[10px]">
                    <div className="inline w-full justify-center">
                        <img
                            className="mx-auto w-[600px] pt-16"
                            src="images\SwiftEase\swifteaseMain.png"
                            alt="Blueprint Post"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-screen-lg px-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="pb-14 font-highTower text-8xl -tracking-[0.06em]">
                            SwiftEase
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                Taylor Swift is arguably one of the largest
                                artists in the world, if not of all time. With
                                her latest tour, The Eras Tour, millions flooded
                                to arenas, venues, and ticket sites. Given her
                                immense influence, ticketing platforms are
                                unable to cater to the needs of her audience.
                                <br />
                                <br />
                                To tackle these challenges, I designed
                                SwiftEase, a website dedicated to enhancing and
                                personalizing access to Taylor’s concerts and
                                merchandise through fun, catered designs and
                                clear visuals.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Timeline
                            </h4>
                            <p className="font-interTight font-light">
                                Jan - Feb 2024{' '}
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 ml-56 pt-12 font-interTight text-base text-[#838588]">
                        Personal project{' '}
                    </div>
                    <div className="col-span-1 grid grid-rows-subgrid px-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Team
                            </h4>
                            <div className="font-interTight font-light">
                                <p>Sarah Mou</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 pl-6">
                        <h4 className="font-interTight text-xl font-semibold leading-6 text-black">
                            Disciplines
                        </h4>
                        <div className="font-interTight text-base font-light text-black">
                            <p>UI / UX Design</p>
                            <p>Web Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
