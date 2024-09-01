import SectionHeader from '../SectionHeader'

export default function SwiftEasePersonalization() {
    return (
        <div className="">
            <div className="mx-auto mt-16 max-w-screen-lg px-8">
                <SectionHeader number="005" title="PERSONALIZATION" />
                <div>
                    <h1 className="mt-8 font-interTight text-4xl font-medium">
                        For Swifties, by a Swiftie.{' '}
                    </h1>
                    <p className="mt-2 font-interTight text-2xl font-light">
                        As a Swiftie myself, I thought it would be fun and
                        rewarding to add little easter eggs for fans.
                    </p>
                </div>

                <img
                    className="h-max w-max pt-16"
                    src="images\SwiftEase\swifteaseDetail.png"
                />
                <div className="pb-16"></div>
            </div>
        </div>
    )
}
