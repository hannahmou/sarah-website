import SectionHeader from '../SectionHeader'

export default function BiddleVisualization() {
    return (
        <div className="mx-auto mt-16 max-w-screen-lg px-12">
            <SectionHeader number="003" title="VISUALIZATION" />
            <div>
                <h1 className="mt-12 font-interTight text-xl font-medium">
                    Transforming tasks to cards{' '}
                </h1>
                <p className="mt-8 pb-12 font-interTight text-2xl font-light text-[#838588]">
                    Rather than sticking with a list view, which runs into
                    problems of readability and comprehension, I thought a
                    better idea would be to utilize a card view for
                    interactivity and clarity.
                </p>
            </div>
            <div className="mx-auto max-w-screen-lg rounded-md bg-[#F6F6F6]">
                <img src="images\Biddle\biddleDescribe.png" />
            </div>
            <h3 className="pt-8 font-interTight text-3xl font-medium">
                Understanding hierarchy{' '}
            </h3>
            <p className="mt-4 font-interTight text-2xl font-light leading-relaxed">
                With a list or table view, often times, hierarchy is difficult
                to achieve—especially with a large amount of information needed
                to be communicated.
            </p>

            <div className="grid grid-flow-col grid-cols-2">
                <div>
                    <div className="pr-24 pt-10 font-interTight text-xl font-light">
                        <p>
                            However, with a card view, it offered a lot more
                            space to play around with text weight, icons, and
                            size to ensure easy comprehension,{' '}
                            <span className="font-interTight font-medium">
                                and make the process of signing up for tasks
                                easy.
                            </span>{' '}
                        </p>
                        <br />
                        <p className="text-xl text-black">
                            The goal was to have your eyes go from the point
                            total, to the title of the tasks, to the
                            description, and the details last.
                        </p>
                    </div>
                </div>
                <div>
                    <img className="" src="images\Biddle\biddleChart.png" />
                </div>
            </div>
        </div>
    )
}
