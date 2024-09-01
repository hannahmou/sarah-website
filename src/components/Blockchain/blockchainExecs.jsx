import SectionHeader from '../SectionHeader'

export default function BlockchainExecs() {
    return (
        <div>
            <div className="">
                <div className="mx-auto mt-16 max-w-screen-lg px-12">
                    <SectionHeader number="002" title="EXECS" />
                    <div>
                        <h1 className="mb-12 mt-4 font-interTight text-4xl">
                            Meet the Execs
                        </h1>
                    </div>
                </div>
            </div>
            <div className="pb-16">
                <img
                    className="mx-auto w-[700px]"
                    src="images\Blockchain\blockchainExecs.png"
                />
            </div>
        </div>
    )
}
