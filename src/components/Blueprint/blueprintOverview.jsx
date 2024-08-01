import SectionHeader from '../SectionHeader'
import SectionTitle from '../SectionTitle'

export default function BlueprintOverview() {
    return (
        <div className="mt-20 bg-[#F6F6F6] pb-20">
            <div className="mx-auto max-w-screen-lg">
                <SectionHeader title="OVERVIEW" number="002" />
                <h2 className="mt-4 text-center font-interTight text-4xl font-medium">
                    Making assets
                </h2>
                <p className="mt-4 text-center font-interTight text-xl leading-9">
                    Inspired by my Pinterest board, I was really excited to make
                    a theme centered around stickers. I liked how they
                    represented creativity, expression, and I especially enjoyed
                    their flexibility and simple forms. We decided to make a
                    couple of assets and colors that were meant to be
                    universally used to tie the theme together.{' '}
                </p>

                <div className="mt-12 grid grid-flow-col grid-cols-2 gap-12 bg-white font-interTight text-[#838588]">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-6 mt-8 text-center font-medium leading-6">
                            Pinterest inspo board
                        </h1>
                        <img
                            src="images/Blueprint/blueprintAssets.png"
                            alt="Pinterest inspo board"
                            className="max-w-full"
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="mb-6 mt-8 text-center font-medium leading-6">
                            Asset library
                        </h1>
                        <img
                            src="images/Blueprint/blueprintAssets.png"
                            alt="Asset library"
                            className="max-w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
