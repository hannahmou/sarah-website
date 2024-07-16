const HoverText = ({ type, name, description }) => {
    return (
        <div>
            <button>
                <img
                    className="absolute right-0 mr-4 h-12 w-auto"
                    src="public\images\arrowRightIcon.png"
                ></img>
            </button>
            <div className="absolute bottom-0 pb-8 pl-5 leading-snug">
                <h3 className="text-wrap font-interTight text-base leading-snug text-[#A9A9A9]">
                    {type}
                </h3>
                <h1 className="text-wrap font-highTower text-6xl italic -tracking-[0.06em]">
                    {name}
                </h1>
                <h2 className="mr-9 text-wrap font-interTight text-base leading-snug">
                    {description}
                </h2>
            </div>
        </div>
    )
}

export default HoverText
