
const ValueCard = ({ img}) => {
    return (
        <div className="flex items-center justify-center  min-w-[380px] snap-center p-4 md:p-8 border shadow-lg rounded-lg group">
            <div className="flex items-center justify-center w-full h-[431px]  bg-[#adadad] rounded-full ">
                <img src={img} alt={"img"} className="w-full h-full max-w-full aspect-square object-cover" />
            </div>
            {/* <p className="text-lg font-['Poppins'] text-shadow-sm">{text}</p> */}

        </div>
    )
}

export default ValueCard