import Navbar from '../Navbar'

export default function FoodchainIntro() {
    return (
        <div className="mx-auto">
            <div className="flex flex-col items-center">
                <div className="h-auto w-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#EDB4BA]/50 to-transparent pt-[10px]">
                    <div className="inline w-full justify-center pt-[70px]">
                        <img
                            className="mx-auto w-[500px]"
                            src="images/Foodchain/foodchainIntroPic.png"
                            alt="Stablepay Desktop"
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-screen-lg px-8">
                <div className="grid grid-flow-col grid-cols-5">
                    <div className="col-span-2 break-words">
                        <h1 className="pb-14 font-highTower text-8xl -tracking-[0.06em]">
                            FoodChain
                        </h1>
                    </div>
                    <div className="border-[#838588]-100 col-span-2 border-r-2">
                        <h4 className="font-interTight text-xl font-semibold leading-6">
                            Context
                        </h4>
                        <div className="mr-16 mt-3 font-light leading-8">
                            <p>
                                As supply chains grow more complex each year,
                                ensuring food safety, preventing contamination,
                                and holding companies accountable are becoming
                                increasingly vital.
                                <br></br>
                            </p>
                        </div>

                        <div className="col-span-2">
                            <p className="mr-16 mt-3 font-light leading-8">
                                <br></br>{' '}
                                <span className="font-semibold">
                                    FoodChain{' '}
                                </span>
                                visualizes all the steps your food takes to end
                                up at your local grocery store and on your
                                plate. By leveraging blockchain technology, you
                                can trust that your food is safe, receive alerts
                                if there are issues, and hold companies
                                accountable by verifying their eco-friendly
                                claims.
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
                    <div className="col-span-1 row-span-2 grid grid-rows-subgrid p-10">
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
                        Blockchain @ Berkeley
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
