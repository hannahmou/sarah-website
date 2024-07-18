export default function SectionHeader({ number, title }) {
    return (
        <div className="flex space-x-8 pt-20 font-interTight text-xl font-normal -tracking-tight">
            <h6>{number}</h6>
            <h6>{title}</h6>
        </div>
    )
}
