import { Link } from 'react-router-dom'

import { useState } from 'react'
import HoverText from './HoverText'
import Navbar from './Navbar'

export default function HomeContent() {
    return (
        <div className="mx-auto max-w-screen-lg p-10 pt-14">
            <div className="col-span-4 my-auto mt-auto font-highTower text-6xl font-normal italic -tracking-[0.04em] text-black">
                sarah mou
            </div>
            <div className="mx-auto mt-8 grid w-full grid-cols-12 gap-4">
                <div className="col-span-5 w-full gap-4">
                    <div className="w-full pb-12 pr-2 font-interTight text-base font-light leading-relaxed text-black">
                        Hello! I'm <span className="italic">Sarah Mou</span>, a
                        product and UX designer at UC Berkeley, who’s excited by
                        clean design and functionality. Feel free to click
                        around and explore!
                    </div>

                    {/* STABLEPAY */}
                    <Link to="stablepay">
                        <div className="group relative mb-4 overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#7DBF5C]/20 to-[#FBFBFD] transition-all duration-300 ease-in-out">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="UI / UX Research Project"
                                    name="stablepay"
                                    description="Making stablecoin finance more accessible for businesses."
                                />
                            </div>
                            <img
                                className="ml-auto mt-0 w-fit object-scale-down pl-4 pt-4"
                                src="images\Stablepay\stablePayMac.png"
                                alt=""
                            />
                        </div>
                    </Link>

                    {/* BLUEPRINT */}
                    <Link to="blueprint">
                        <div className="background-gradient group from-[#86D1EE]/20 to-[#FBFBFD]">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="Social Media Design"
                                    name="Blueprint"
                                    description="Developing a cohesive and impactful social media presence."
                                />
                            </div>
                            <img
                                className="mx-auto my-20 h-auto max-w-full object-scale-down"
                                src="/images/bluePrintPost.png"
                                alt=""
                            />
                        </div>
                    </Link>
                    {/* BERKELEY REKWELL */}
                    <Link to="berkeleyrekwell">
                        <div className="background-gradient group from-[#DC3D77]/20 to-[#FBFBFD]">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="Event Branding, Print Design"
                                    name="Berkely RecWell"
                                    description="Developing a cohesive and impactful social media presence."
                                />
                            </div>
                            <img
                                className="mx-auto h-auto max-w-full object-scale-down py-[50px] pr-[50px]"
                                src="/images/berkeleyRekWellBook.png"
                                alt=""
                            />
                        </div>
                    </Link>
                    {/* BIDDLE */}
                    <Link to="biddle">
                        <div className="background-gradient group from-[#5C35A5]/20 to-[#FBFBFD]">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="UI / UX Design"
                                    name="Biddle"
                                    description="Transforming the process of making and tracking Greek points."
                                />
                            </div>
                            <img
                                className="mx-auto my-[70px] h-[500px] max-w-full object-scale-down"
                                src="/images/biddleIphone.png"
                                alt=""
                            />
                        </div>
                    </Link>
                    {/* BLOCKCHAIN */}
                    <Link to="blockchain">
                        <div className="background-gradient group from-[#EAA536]/20 to-[#FBFBFD]">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="Social Media Branding"
                                    name="B@B"
                                    description="Revamping Blockchain @ Berkeley’s social media presence and recruitment theme"
                                />
                            </div>
                            <img
                                className="mx-auto my-[100px] h-[320px] max-w-full object-scale-down"
                                src="images\blockchain.png"
                                alt=""
                            />
                        </div>
                    </Link>
                </div>
                <div className="col-span-7 flex w-full flex-col">
                    {/* FOODCHAIN */}
                    <Link to="foodchain">
                        <div className="background-gradient group from-rose-300/20 to-[#FBFBFD]">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="UI / UX Design"
                                    name="FoodChain"
                                    description="Utilizing blockchain techology to trace the journey of food prodcts, ensuring their safety and integrity."
                                />
                            </div>
                            <img
                                className="mx-auto my-[15px] h-[380px] max-w-full object-scale-down"
                                src="/images/Foodchain/foodChainIphone.png"
                                alt=""
                            />
                        </div>
                    </Link>
                    {/* SWIFTEASE */}
                    <Link to="swiftease">
                        <div className="background-gradient group from-[#5067AB]/20 to-[#FBFBFD]">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="Web Design / Development"
                                    name="SwiftEase"
                                    description="Streamlining object-scale-down the ticket purchasing process of concert tickets for Taylor Swift fans."
                                />
                            </div>
                            <img
                                className="mx-auto my-24 h-auto max-w-full"
                                src="/images/swiftEaseEvents.png"
                                alt=""
                            />
                        </div>
                    </Link>
                    {/* CAL ESPORTS */}
                    <Link to="calesports">
                        <div className="background-gradient group from-[#003262]/20 to-[#FBFBFD]">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="Social Media Design / Event Branding"
                                    name="CalEsports"
                                    description="Advertising events and initiatives by the Cal Esports organization."
                                />
                            </div>
                            <img
                                className="mx-auto my-40 max-w-full object-scale-down px-8"
                                src="/images/calEsports.png"
                                alt=""
                            />
                        </div>
                    </Link>
                    {/* LAW LOOP 
                    
                    
                     <Link to="lawloop"> 
                        <div className="background-gradient group h-full flex-1 overflow-hidden from-[#5F8AB0]/20 to-[#FBFBFD]">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="Web Design / Development"
                                    name="LawLoop"
                                    description="Optimizing the process of selecting a law firm through AI, data, and analytics."
                                />
                            </div>
                            <img
                                className="my-auto max-w-full object-scale-down py-[100px] pr-[25px]"
                                src="/images/lawLoopMacbook.png"
                                alt=""
                            />
                        </div>
                    </Link>
                    
                    */}
                    <Link to="">
                        <div className="background-gradient group h-full flex-1 overflow-hidden from-[#5F8AB0]/20 to-[#FBFBFD]">
                            <h1 className="py-[365px] text-center font-interTight text-7xl italic leading-[100px]">
                                TOP SECRET ;)
                            </h1>
                        </div>
                    </Link>
                    {/* COMING SOON */}
                    <Link to="#">
                        <div className="background-gradient group from-[#EB2234]/20 to-[#FBFBFD]">
                            <div className="flex h-[620px] items-center justify-center">
                                <h1 className="text-center font-highTower text-7xl italic leading-[87px] -tracking-[0.03em]">
                                    coming soon...
                                </h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
