import { useState } from 'react'
import HoverText from './HoverText'

export default function Header() {
    return (
        <div className="pb-[40px] lg:px-[100px]">
            <div className="font-highTower text-5xl font-normal italic -tracking-[0.04em] text-black sm:text-[85px] lg:text-[200px]">
                sarah mou
            </div>
            <div className="sm:grid-cols-16 mx-auto mt-[30px] grid w-full gap-[24px] md:grid-cols-5 lg:grid-cols-8">
                <div className="w-full gap-4 md:col-span-2 lg:col-span-3">
                    <div className="w-full pb-[79px] pr-[40px] font-interTight font-light leading-9 text-black sm:pl-[20px] md:pl-[79px] md:text-[20px] lg:pl-[21px] lg:text-[30px]">
                        Hello! I'm Sarah Mou, a product and UX designer at UC
                        Berkeley, who’s excited by clean design and
                        functionality. Feel free to click around and explore!
                    </div>

                    {/* STABLECOIN */}
                    <div className="group relative mb-[24px] h-auto w-full overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#7DBF5C]/20 to-[#FBFBFD] transition-all duration-300 ease-in-out">
                        <div className="hover-gradient">
                            <HoverText
                                type="UI / UX Research Project"
                                name="stablepay"
                                description="Making stablecoin finance more accessible for businesses."
                            />
                        </div>
                        <img
                            className="mx-auto ml-[96px] mt-[96px] h-auto w-full"
                            src="/images/stablePayMac.png"
                            alt=""
                        />
                    </div>

                    {/* BLUEPRINT */}
                    <div className="background-gradient group from-[#86D1EE]/20 to-[#FBFBFD]">
                        <div className="hover-gradient">
                            <HoverText
                                type="Social Media Design"
                                name="Blueprint"
                                description="Developing a cohesive and impactful social media presence."
                            />
                        </div>
                        <img
                            className="mx-auto my-[100px] h-auto max-w-full"
                            src="/images/bluePrintPost.png"
                            alt=""
                        />
                    </div>
                    {/* BERKELEY REKWELL */}
                    <div className="background-gradient group from-[#DC3D77]/20 to-[#FBFBFD]">
                        <div className="hover-gradient">
                            <HoverText
                                type="Event Branding, Print Design"
                                name="Berkely RecWell"
                                description="Developing a cohesive and impactful social media presence."
                            />
                        </div>
                        <img
                            className="mx-auto h-auto max-w-full py-[50px] pr-[50px]"
                            src="/images/berkeleyRekWellBook.png"
                            alt=""
                        />
                    </div>
                    {/* BIDDLE */}
                    <div className="background-gradient group from-[#5C35A5]/20 to-[#FBFBFD]">
                        <div className="hover-gradient">
                            <HoverText
                                type="UI / UX Design"
                                name="Biddle"
                                description="Transforming the process of making and tracking Greek points."
                            />
                        </div>
                        <img
                            className="mx-auto my-[100px] max-w-full py-[80px]"
                            src="/images/biddleIphone.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 md:col-span-3 lg:col-span-5">
                    {/* FOODCHAIN */}
                    <div className="background-gradient group from-rose-300/20 to-[#FBFBFD]">
                        <div className="hover-gradient">
                            <HoverText
                                type="UI / UX Design"
                                name="FoodChain"
                                description="Utilizing blockchain techology to trace the journey of food prodcts, ensuring their safety and integrity."
                            />
                        </div>
                        <img
                            className="mx-auto my-[15px] h-[500px] max-w-full"
                            src="/images/foodChainIphone.png"
                            alt=""
                        />
                    </div>
                    {/* SWIFTEASE */}
                    <div className="background-gradient group from-[#5067AB]/20 to-[#FBFBFD]">
                        <div className="hover-gradient">
                            <HoverText
                                type="Web Design / Development"
                                name="SwiftEase"
                                description="Streamlining the ticket purchasing process of concert tickets for Taylor Swift fans."
                            />
                        </div>
                        <img
                            className="mx-auto h-auto max-w-full md:my-[150px]"
                            src="/images/swiftEaseEvents.png"
                            alt=""
                        />
                    </div>
                    {/* CAL ESPORTS */}
                    <div className="background-gradient group from-[#003262]/20 to-[#FBFBFD]">
                        <div className="hover-gradient">
                            <HoverText
                                type="Social Media Design / Event Branding"
                                name="CalEsports"
                                description="CHANGE THIS IS TAYLOR SWIFT RELATED."
                            />
                        </div>
                        <img
                            className="mx-auto max-w-full px-[30px] sm:my-[175px] md:my-[250px]"
                            src="/images/calEsports.png"
                            alt=""
                        />
                    </div>
                    {/* LAW LOOP */}
                    <div className="background-gradient group h-full flex-1 overflow-hidden from-[#5F8AB0]/20 to-[#FBFBFD]">
                        <div className="hover-gradient">
                            <HoverText
                                type="Web Design / Development"
                                name="LawLoop"
                                description="Optimizing the process of selecting a law firm through AI, data, and analytics."
                            />
                        </div>
                        <img
                            className="h-auto max-w-full pr-[100px] sm:my-[70px] md:my-[200px] lg:my-[200px]"
                            src="/images/lawLoopMacbook.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
