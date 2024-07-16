const HoverText = ({ type, name, description }) => {
    return (
        <div>
            <button>
                <img
                    className="absolute right-0 m-[54px]"
                    src="public\images\arrowRightIcon.png"
                ></img>
            </button>
            <div className="absolute bottom-[20px] m-[30px] pl-[25px] leading-[80px]">
                <h3 className="text-wrap font-interTight text-[25px] leading-[70px] text-[#A9A9A9]">
                    {type}
                </h3>
                <h1 className="text-wrap font-highTower text-[95px] italic -tracking-[0.06em]">
                    {name}
                </h1>
                <h2 className="text-wrap pt-[55px] font-interTight text-[25px] leading-[38px]">
                    {description}
                </h2>
            </div>
        </div>
    )
}

export default HoverText
