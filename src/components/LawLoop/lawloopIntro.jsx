import Navbar from '../Navbar'

export default function LawLoopIntro() {
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#5F8AB0]/20 to-transparent pt-32">
                    <div className="inline w-full justify-center pt-[70px]">
                        <img
                            className="mx-auto w-[800px]"
                            src="public\images\LawLoop\lawloopIntro.png"
                            alt="Stablepay Desktop"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-screen-lg px-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="pb-14 font-highTower text-8xl -tracking-[0.06em]">
                            LawLoop
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                <div>
                                    LawLoop is a platform designed to simplify
                                    the often overwhelming process of finding
                                    legal representation and navigating complex
                                    legal matters. By leveraging advanced AI
                                    technology, LawLoop streamlines the search
                                    for qualified lawyers and provides tailored
                                    recommendations based on your specific needs
                                    and case details.
                                </div>
                                <br></br>
                                This innovative approach not only helps you find
                                the right legal help but also empowers you with
                                the knowledge to navigate legal challenges more
                                confidently.{' '}
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Timeline
                            </h4>
                            <p className="font-interTight font-light">
                                Jan - Aug 2024
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
                                <p>Oleg Viakin</p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center pt-12 font-interTight text-base text-[#838588]">
                        Personal project
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
