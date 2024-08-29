import SectionHeader from '../SectionHeader'

export default function CalEsportsGame() {
    return (
        <div>
            <div className="">
                <div className="mx-auto mt-16 max-w-screen-lg px-12">
                    <SectionHeader number="001" title="GAME SHOW NIGHT" />
                    <div>
                        <h1 className="mb-12 mt-4 font-interTight text-4xl">
                            RRR Week Announcement Post
                        </h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#F6F6F6] py-16">
                <img
                    className="b mx-auto"
                    src="public\images\CalEsports\calesportsGame.png"
                />
            </div>
        </div>
    )
}
