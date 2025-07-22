import Navbar from '../Navbar'
import { useEffect } from 'react';


export default function RoveIntro() {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#5F8AB0]/20 to-transparent pt-32">
                    <div className="inline w-full justify-center pt-[70px]">
                        <img
                            className="mx-auto w-[400px]"
                            src="src\assets\images\Iphone.png"
                            alt="Rove IPhone"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-screen-lg px-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="pb-14 font-highTower text-7xl -tracking-[0.06em]">
                            Rove Miles
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                <div>
                                    I served as the sole product designer collaborating with a team of 5+ developers at Rove, leading end-to-end design for several core products. I spearheaded the redesign of the Rove Miles landing page, which drove a 150%+ increase in conversions within days of launch. Beyond the web experience, I also crafted Rove’s new user dashboard and am currently leading design for their upcoming mobile app, building a cohesive and scalable user experience across platforms.
                                </div>
                                
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-10">
                        <div className="row-start-2">
                            <h4 className="font-interTight text-xl font-semibold leading-6">
                                Timeline
                            </h4>
                            <p className="font-interTight font-light">
                                May 2025 - Present
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
                            </div>
                        </div>
                    </div>
                    <div className="justify-center pt-12 font-interTight text-base text-[#838588]">
                        Product Designer
                    </div>

                    <div className="col-span-1 pl-6">
                        <h4 className="font-interTight text-xl font-semibold leading-6 text-black">
                            Disciplines
                        </h4>
                        <div className="font-interTight text-base font-light text-black">
                            <p>UI / UX Design</p>
                            <p>Product Design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
