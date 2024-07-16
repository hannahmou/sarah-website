export default function IntroStablepay() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#277F4E]/50 to-transparent pt-[65px]">
                    <div className="flex w-full justify-center pt-[70px]">
                        <img
                            className="w-[800px]"
                            src="public/images/StablepayDesktop.png"
                            alt="Stablepay Desktop"
                        />
                    </div>
                </div>
            </div>
            <div className="grow-0 p-96 pt-[100px]">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="py-20 font-highTower text-8xl -tracking-[0.06em]">
                            stablepay
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                Stablecoins are digital tokens pegged to
                                real-world assets, like fiat currency. Despite
                                their versatile applications, they often face
                                distrust and encounter barriers to growth and
                                widespread adoption.
                                <br></br>
                            </p>
                        </div>

                        <div className="col-span-2">
                            <p className="mr-16 mt-3 font-light leading-8">
                                <br></br>
                                To tackle these challenges, we created{' '}
                                <span className="font-semibold">stablepay</span>
                                , an application dedicated to enhancing the
                                accessibility of stablecoin finance through
                                innovative technology and user-friendly
                                platforms.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-3 grid grid-rows-subgrid p-12">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Timeline
                            </h4>
                            <p className="font-interTight font-light">
                                Jan - May 2024
                            </p>
                        </div>
                    </div>
                    <div className="col-span-1 row-span-3 grid grid-rows-subgrid p-12">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Team
                            </h4>
                            <div className="font-interTight font-light">
                                <p>Sarah Mou</p>
                                <p>Jessica Situ</p>
                                <p>Oleg Viakin</p>
                                <p>Arushi Arora</p>
                                <p>Meghan Ho</p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center pt-32 font-interTight text-xl text-[#838588]">
                        Blockchain @ Berkeley
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-interTight text-xl font-semibold leading-6 text-black">
                            Disciplines
                        </h4>
                        <div className="font-interTight text-base font-light text-black">
                            <p>UI / UX Research</p>
                            <p>Web Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
