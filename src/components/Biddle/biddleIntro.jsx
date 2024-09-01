export default function BiddleIntro() {
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#5C35A5]/25 to-transparent pt-[10px]">
                    <div className="inline w-full justify-center">
                        <img
                            className="mx-auto w-[400px] pt-16"
                            src="images\Biddle\biddleTilt.png"
                            alt="Blueprint Post"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-screen-lg px-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="pb-14 font-highTower text-8xl -tracking-[0.06em]">
                            Biddle
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                Within the Greek community, managing points and
                                rewards for tasks can be a complex and
                                frustrating process. The system of tracking,
                                assigning, and updating points is prone to
                                inefficiencies, often leading to confusion.
                                <br />
                                <br />
                                <span className="font-interTight font-bold">
                                    {' '}
                                    Biddle{' '}
                                </span>
                                simplifies the entire process. It distills
                                complexities of management into an intuitive,
                                user-friendly experience. With Biddle, users can
                                easily update, assign, and create points,
                                removing the guesswork and hassle from the
                                system.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Timeline
                            </h4>
                            <p className="font-interTight font-light">
                                Dec - Jan 2024
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 justify-center pl-48 pt-12 font-interTight text-base text-[#838588]">
                        Personal Project
                    </div>
                    <div className="col-span-1 grid grid-rows-subgrid px-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Team
                            </h4>
                            <div className="font-interTight font-light">
                                <p>Sarah Mou</p>
                                <p>Oleg Viakin</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 pl-6">
                        <h4 className="font-interTight text-xl font-semibold leading-6 text-black">
                            Disciplines
                        </h4>
                        <div className="font-interTight text-base font-light text-black">
                            <p>UI / UX Research</p>
                            <p>Prototyping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
