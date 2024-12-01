import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const itemList = [
        {
            name: "SELL AN ITEM",
            link: "/"
        },
        {
            name: "JOIN US ",
            link: "/"
        },
        {
            name: "SIGN IN",
            link: "/login"
        },

    ]
    const [isActive, setIsActive] = useState("")
    return (
        <div className="flex justify-end w-full p-4 md:p-6 2xl:p-8 bg">
            <div className="flex justify-center md:justify-between items-center w-full md:max-w-7xl">
                <div className="flex items-center w-full gap-8 justify-center md:justify-end flex-wrap-reverse">
                    <div className="flex items-center gap-2 rounded-full br px-4 bg-white overflow-hidden max-w-[30rem] w-full">
                        <input type="search" className="border-none outline-none w-full p-2 font-semibold placeholder:font-semibold placeholder:text-black" placeholder="Search..." />

                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.2646 15.0023L16.2644 15.0022L12.6004 11.3461C13.476 10.2094 13.9999 8.78725 13.9999 7.24125C13.9999 3.52116 10.9701 0.5 7.24993 0.5C3.52976 0.5 0.5 3.52116 0.5 7.24125C0.5 10.9613 3.52976 13.9825 7.24993 13.9825C8.79524 13.9825 10.2218 13.4592 11.3607 12.5843L15.0228 16.2413C15.1936 16.4119 15.4175 16.498 15.6437 16.498C15.8698 16.498 16.0937 16.4119 16.2646 16.2413C16.6078 15.8985 16.6078 15.3451 16.2646 15.0023ZM12.2463 7.24125C12.2463 9.98986 10.0041 12.23 7.24993 12.23C4.4958 12.23 2.25356 9.98986 2.25356 7.24125C2.25356 4.49264 4.4958 2.25251 7.24993 2.25251C10.0042 2.25251 12.2463 4.48975 12.2463 7.24125Z" fill="#00FFFC" stroke="#FE0094" />
                        </svg>


                    </div>
                    <div className="flex items-center gap-8 flex-wrap">
                        {itemList.map((item, index) => (
                            <Link onClick={() => setIsActive(item.name)} key={index} to={item.link} className={`text-black  ${isActive == item.name ? "btn_br" : "border border-transparent"} px-4 py-1.5 font-bold uppercase bg-[#EEDFE2]`}>{item.name}</Link>
                        ))}



                    </div>
                </div>
            </div>


        </div >
    )
}

export default Navbar