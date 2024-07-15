export default function Header() {
  return (
    <>
      <div className="text-black font-normal font-highTower italic -tracking-[0.06em] md:ml-[100px] sm:ml-[40px] mt-[98px] text-[183.59px] sm:text-[85px] lg:text-[183px]">
        sarah mou
      </div>
      <div class="mt-[40px] px-4 sm:px-6 lg:px-[100px] mx-auto w-full grid lg:grid-cols-8 md:grid-cols-5 sm:grid-cols-1 gap-[24px]">
        <div class="gap-4 lg:col-span-3 md:col-span-2 w-full">
          <div className="pr-[40px] lg:pl-[21px] md:pl-[79px] sm:pl-[20px] pb-[79px] text-black text-[25.35px] font-light font-interTight leading-7 w-full">
            Hello! I'm Sarah Mou, a product and UX designer at UC Berkeley,
            who’s excited by clean design and functionality. Feel free to click
            around and explore!
          </div>
          {/* STABLECOIN */}
          <div className="mb-[24px] h-auto overflow-hidden border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-[#7DBF5C]/20 to-[#FBFBFD] rounded-[40px] w-full">
            <img
              class="h-auto w-full mx-auto mt-[96px] ml-[96px]"
              src="src/assets/images/stablePayMac.png"
              alt=""
            />
          </div>
          {/* BLUEPRINT */}
          <div className="mb-[24px] h-auto overflow-hidden border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#86D1EE]/20 to-[#FBFBFD] rounded-[40px] w-full">
            <img
              class="h-auto max-w-full mx-auto my-[100px]"
              src="src/assets/images/bluePrintPost.png"
              alt=""
            />
          </div>
          {/* BERKELEY REKWELL */}
          <div className="mb-[24px] h-auto overflow-hidden border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#DC3D77]/20 to-[#FBFBFD] rounded-[40px] w-full">
            <img
              class=" h-auto max-w-full mx-auto py-[50px] pr-[50px]"
              src="src\assets\images\berkeleyRekWellBook.png"
              alt=""
            />
          </div>
          {/* BIDDLE */}
          <div className="mb-[24px] h-auto border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#5C35A5]/20 to-[#FBFBFD] rounded-[40px] w-full">
            <img
              class="h-auto max-w-full mx-auto my-[116px]"
              src="src\assets\images\biddleIphone.png"
              alt=""
            />
          </div>
        </div>
        <div class="gap-4 lg:col-span-5 md: col-span-3 w-full">
          {/* FOODCHAIN */}
          <div className=" mb-[24px] h-auto border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-300/20 to-[#FBFBFD] rounded-[40px] w-full">
            <img
              class="h-auto max-w-full mx-auto my-[45px]"
              src="src/assets/images/foodChainIphone.png"
              alt=""
            />
          </div>
          {/* SWIFTEASE */}
          <div className="mb-[24px] h-auto overflow-hidden border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#5067AB]/20 to-[#FBFBFD] rounded-[40px] w-full">
            <img
              class="h-auto max-w-full mx-auto py-[84px]"
              src="src/assets/images/swiftEaseEvents.png"
              alt=""
            />
          </div>
          {/* CAL ESPORTS */}
          <div className="mb-[24px] h-auto overflow-hidden border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#003262]/20 to-[#FBFBFD] rounded-[40px] w-full">
            <img
              class="h-auto max-w-full mx-auto my-[245px] px-[30px]"
              src="src\assets\images\calEsports.png"
              alt=""
            />
          </div>
         {/* LAW LOOP */}
         <div className="mb-[24px] h-auto overflow-hidden border-[2.65px] border-[#E6E8ED] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#5F8AB0]/20 to-[#FBFBFD] rounded-[40px] w-full">
            <img
              class="h-auto max-w-full margin-right my-[100px]"
              src="src\assets\images\lawLoopMacbook.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
