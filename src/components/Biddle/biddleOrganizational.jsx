import SectionHeader from '../SectionHeader'

export default function BiddleOrganizational() {
    return (
        <div className="mx-auto mt-16 max-w-screen-lg px-12 pb-16">
            <SectionHeader number="005" title="ORGANIZATIONAL ISSUES" />
            <div>
                <h1 className="mt-12 font-interTight text-4xl font-medium">
                    Get updates in real time
                </h1>
                <p className="mt-8 pb-12 font-interTight text-2xl font-light text-[#838588]">
                    Point totals can change, depending on urgency, time frame,
                    or many other factors. Get notified when point totals
                    change, a new task opens, or reminders before a signed up
                    task.
                </p>
            </div>
            <div className="mx-auto max-w-screen-lg">
                <img src="public\images\Biddle\biddleOrganizational.jsx.png" />
            </div>
        </div>
    )
}
