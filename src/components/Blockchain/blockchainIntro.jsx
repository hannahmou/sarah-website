export default function BlockchainIntro() {
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#EAA536]/50 to-transparent pt-[10px]">
                    <div className="inline w-full justify-center">
                        <img
                            className="mx-auto w-[300px] pt-16"
                            src="public\images\blockchain.png"
                            alt="Blockchain Post"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-screen-lg px-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="pb-14 font-highTower text-8xl -tracking-[0.06em]">
                            Blockchain
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                As a part of marketing and operations for B@B, I
                                was able to design the flyer and other social
                                posts to draw in applicants during the
                                recruitment cycle. Through word of mouth, I
                                heard my flyer was responsible for many people’s
                                interest in the club and their subsequent
                                applications.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Timeline
                            </h4>
                            <p className="font-interTight font-light">
                                Aug 2024 - Present
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 justify-center pl-40 pt-12 font-interTight text-base text-[#838588]">
                        Social Media Marketing
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
                            <p>Graphic Design</p>
                            <p>Print Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
