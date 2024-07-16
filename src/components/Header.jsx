export default function Header() {
    return (
        <>
            <div className="font-highTower text-[100px] font-normal italic -tracking-[0.04em] text-black sm:text-[85px] lg:text-[250px]">
                sarah mou
            </div>
            <div className="sm:grid-cols-16 mx-auto mt-[10px] grid w-full gap-[24px] md:grid-cols-5 lg:grid-cols-8">
                <div className="w-full gap-4 md:col-span-2 lg:col-span-3">
                    <div className="w-full pb-[79px] pr-[40px] font-interTight font-light leading-9 text-black sm:pl-[20px] md:pl-[79px] md:text-[20px] lg:pl-[21px] lg:text-[30px]">
                        Hello! I'm Sarah Mou, a product and UX designer at UC
                        Berkeley, who’s excited by clean design and
                        functionality. Feel free to click around and explore!
                    </div>
                    {/* STABLECOIN */}
                    <div className="mb-[24px] h-auto w-full overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#7DBF5C]/20 to-[#FBFBFD]">
                        <img
                            className="mx-auto ml-[96px] mt-[96px] h-auto w-full"
                            src="/images/stablePayMac.png"
                            alt=""
                        />
                    </div>
                    {/* BLUEPRINT */}
                    <div className="mb-[24px] h-auto w-full overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#86D1EE]/20 to-[#FBFBFD]">
                        <img
                            className="mx-auto my-[100px] h-auto max-w-full"
                            src="/images/bluePrintPost.png"
                            alt=""
                        />
                    </div>
                    {/* BERKELEY REKWELL */}
                    <div className="mb-[24px] h-auto w-full overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#DC3D77]/20 to-[#FBFBFD]">
                        <img
                            className="mx-auto h-auto max-w-full py-[50px] pr-[50px]"
                            src="/images/berkeleyRekWellBook.png"
                            alt=""
                        />
                    </div>
                    {/* BIDDLE */}
                    <div className="h-auto w-full rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#5C35A5]/20 to-[#FBFBFD]">
                        <img
                            className="mx-auto my-[60px] h-[600px] max-w-full"
                            src="/images/biddleIphone.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="flex w-full flex-col gap-4 md:col-span-3 lg:col-span-5">
                    {/* FOODCHAIN */}
                    <div className="mb-[24px] h-auto w-full rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-300/20 to-[#FBFBFD]">
                        <img
                            className="mx-auto my-[15px] h-[500px] max-w-full"
                            src="/images/foodChainIphone.png"
                            alt=""
                        />
                    </div>
                    {/* SWIFTEASE */}
                    <div className="mb-[24px] h-auto w-full overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#5067AB]/20 to-[#FBFBFD]">
                        <img
                            className="mx-auto h-auto max-w-full py-[84px]"
                            src="/images/swiftEaseEvents.png"
                            alt=""
                        />
                    </div>
                    {/* CAL ESPORTS */}
                    <div className="mb-[24px] h-auto w-full overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#003262]/20 to-[#FBFBFD]">
                        <img
                            className="mx-auto my-[150px] h-[100px] max-w-full"
                            src="/images/calEsports.png"
                            alt=""
                        />
                    </div>
                    {/* LAW LOOP */}
                    <div className="flex h-full flex-1 items-center justify-center overflow-hidden rounded-[40px] border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#5F8AB0]/20 to-[#FBFBFD]">
                        <img
                            className="h-auto max-w-full"
                            src="/images/lawLoopMacbook.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
