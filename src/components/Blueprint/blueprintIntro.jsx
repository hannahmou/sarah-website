export default function BlueprintIntro() {
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#86D1EE]/50 to-transparent pt-[10px]">
                    <div className="inline w-full justify-center">
                        <img
                            className="mx-auto w-[400px] pt-16"
                            src="images\bluePrintPost.png"
                            alt="Blueprint Post"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-screen-lg px-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="pb-14 font-highTower text-8xl -tracking-[0.06em]">
                            Blueprint
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                As External Director, I was responsible for
                                managing Blueprint's social media and promoting
                                various events. Collaborating with my partner
                                and incorporating feedback from other members,
                                we developed a theme, color schemes, and design
                                elements for the semester.
                                <br />
                                <br />
                                This effort resulted in creating posts for our
                                annual Project Showcase, which was a
                                collaboration with four other external clubs, as
                                well as for special speaker events and retreat
                                recaps.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Timeline
                            </h4>
                            <p className="font-interTight font-light">
                                Jan - June 2024
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 justify-center pt-12 font-interTight text-base text-[#838588]">
                        Blueprint, Technology for Non-Profits
                    </div>
                    <div className="col-span-1 grid grid-rows-subgrid px-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Team
                            </h4>
                            <div className="font-interTight font-light">
                                <p>Sarah Mou</p>
                                <p>Piper Yu</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 pl-6">
                        <h4 className="font-interTight text-xl font-semibold leading-6 text-black">
                            Disciplines
                        </h4>
                        <div className="font-interTight text-base font-light text-black">
                            <p>Social Media</p>
                            <p>Prototyping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
