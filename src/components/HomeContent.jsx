import { Link } from 'react-router-dom'

import { useState } from 'react'
import HoverText from './HoverText'

export default function HomeContent() {
    function handleClick() {
        return (
            <>
                <Link to="/stablepay" />
            </>
        )
    }

    return (
        <div className="pb-9 sm:pt-0 md:px-10 lg:px-[96px]">
            <div className="font-highTower font-normal italic -tracking-[0.04em] text-black sm:text-[75px] md:text-[80px] lg:text-[100px]">
                sarah mou
            </div>
            <div className="sm:grid-cols-16 mx-auto mt-[30px] grid w-full gap-[24px] md:grid-cols-5 lg:grid-cols-12">
                <div className="w-full gap-[24px] md:col-span-2 lg:col-span-5">
                    <div className="w-full pb-[79px] pr-[40px] font-interTight font-light leading-9 text-black md:text-[20px] lg:text-[30px]">
                        Hello! I'm <span className="italic">Sarah Mou</span>, a
                        product and UX designer at UC Berkeley, who’s excited by
                        clean design and functionality. Feel free to click
                        around and explore!
                    </div>

                    {/* STABLEPAY */}
                    <Link to="stablepay">
                        <div className="group relative mb-[24px] h-auto w-full overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#7DBF5C]/20 to-[#FBFBFD] transition-all duration-300 ease-in-out">
                            <div className="hover-gradient">
                                <HoverText
                                    className="transition-opacity duration-300 ease-in-out"
                                    type="UI / UX Research Project"
                                    name="stablepay"
                                    description="Making stablecoin finance more accessible for businesses."
                                />
                            </div>
                            <img
                                className="ml-auto mt-4 w-fit object-scale-down pl-14 pt-14"
                                src="images\stablePayMac.png"
                                alt=""
                            />
                        </div>
                    </Link>

                    {/* BLUEPRINT */}
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
                    {/* BERKELEY REKWELL */}
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
                    {/* BIDDLE */}
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
                </div>
                <div className="flex w-full flex-col md:col-span-3 lg:col-span-7">
                    {/* FOODCHAIN */}
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
                            src="/images/foodChainIphone.png"
                            alt=""
                        />
                    </div>
                    {/* SWIFTEASE */}
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
                    {/* CAL ESPORTS */}
                    <div className="background-gradient group from-[#003262]/20 to-[#FBFBFD]">
                        <div className="hover-gradient">
                            <HoverText
                                className="transition-opacity duration-300 ease-in-out"
                                type="Social Media Design / Event Branding"
                                name="CalEsports"
                                description="CHANGE THIS IS TAYLOR SWIFT RELATED."
                            />
                        </div>
                        <img
                            className="px- mx-auto my-60 max-w-full object-scale-down"
                            src="/images/calEsports.png"
                            alt=""
                        />
                    </div>
                    {/* LAW LOOP */}
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
                            className="my-auto max-w-full object-scale-down py-[75px] pr-[25px]"
                            src="/images/lawLoopMacbook.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
