import PropTypes from "prop-types"

const CustomerCard = ({item}) => {
    return (
        <div

            className="flex flex-col gap-5  transition-all min-w-[380px] w-[32%] duration-500 animate_opacity bg-white border-2 border-[#EEDFE2] rounded-xl p-4"

        >
            <div className="flex items-center">
                <div className="flex items-center justify-center shrink-0 h-[154px] w-[184px] bg-[#adadad] rounded-lg">
                    <img
                        src={item.img}
                        alt={"img"}
                        className="w-full h-full max-w-full  object-cover"
                    />
                </div>
                <div className="flex flex-col gap-3 border-b-2 pb-2">
                    <h1 className="text-lg font-bold font-['Poppins'] text-shadow-sm">{item.heading}</h1>
                    <p className="text-sm font-['Poppins'] text-shadow-sm font-medium">{item.subHeading}</p>
                </div>
            </div>
            <p className="text-sm font-['Poppins'] text-shadow-sm text-[#464255]">{item.description}</p>
            <div className="flex flex-row items-center gap-3 justify-between bg-[#EEDFE2] p-4 rounded-xl">
                <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center shrink-0 h-[39px] w-[44px] bg-[#EEDFE2] rounded-lg">
                        <img
                            src={item.img}
                            alt={"img"}
                            className="w-full h-full max-w-full  object-cover mix-blend-multiply"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-sm font-['Poppins'] font-semibold text-shadow-sm">{item.name}</h1>
                        <p className="text-xs font-normal font-['Poppins'] text-shadow-sm">{item.role}</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.8846 1.63592L8.82358 7.43698L1.97488 8.37023C0.746704 8.53673 0.254498 9.95194 1.14516 10.7625L6.10003 15.2754L4.92811 21.6504C4.71717 22.8028 6.01566 23.6659 7.1032 23.127L13.23 20.1169L19.3568 23.127C20.4443 23.6615 21.7428 22.8028 21.5319 21.6504L20.36 15.2754L25.3148 10.7625C26.2055 9.95194 25.7133 8.53673 24.4851 8.37023L17.6364 7.43698L14.5754 1.63592C14.0269 0.601899 12.4378 0.588755 11.8846 1.63592Z" fill="#F9C03C" />
                    </svg>
                    <span className="font-semibold">
                        {
                            item.rating
                        }
                    </span>

                </div>
            </div>
        </div>
    )
}
CustomerCard.propTypes = {
    item: PropTypes.any
}
export default CustomerCard