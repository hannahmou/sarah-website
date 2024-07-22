export default function StablepayDifferent() {
    return (
        <div>
            <div className="mx-auto max-w-screen-lg px-8">
                <div>
                    <h1 className="mx-auto mt-12 pt-36 text-center font-interTight text-4xl font-medium">
                        Different screens for different users.
                    </h1>
                    <p className="mx-auto w-[700px] pt-8 text-center font-interTight text-xl font-light text-[#838588]">
                        Understanding the unique preferences and requirements of
                        each audience to create customized experiences that
                        cater to their needs, ensuring usability and
                        satisfaction for both.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-2">
                    <div className="flex items-end">
                        <img
                            className="align-bottom"
                            src="images/stablepayMacFull.png"
                        />
                    </div>
                    <div className="flex items-end">
                        <img
                            className="align-bottom"
                            src="images/stablepayLaptop.png"
                        />
                    </div>
                </div>
                <div className="mt-24 grid grid-flow-col grid-cols-4 pb-24 font-interTight">
                    <div className="pl-16">
                        <p className="font-semibold">Business Dashboard</p>
                        <p>Earnings</p>
                        <p>Staking</p>
                    </div>
                    <div className="border-r-4 pl-16">
                        <br />
                        <p>Risk tolerance</p>
                        <p>Education</p>
                    </div>
                    <div className="pl-16">
                        <p className="font-semibold">User Dashboard</p>
                        <p>Latest transactions</p>
                        <p>Rewards</p>
                    </div>
                    <div className="pl-16">
                        <br />
                        <p>Spending</p>
                        <p>Expenses</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#F6F6F6]">
                <div className="mx-auto max-w-screen-lg py-24">
                    <h2 className="font-interTight text-3xl font-light">
                        By making stablecoin finance more accessible, we can
                        empower millions with a{' '}
                        <span className="font-semibold">
                            stable, efficient, and inclusive digital currency
                            system
                        </span>{' '}
                        that disrupts traditional finance, and facilitates
                        seamless cross-border transactions.
                    </h2>
                </div>
            </div>
        </div>
    )
}
