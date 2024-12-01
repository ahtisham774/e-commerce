import { useState } from "react"
import Slider from "../components/authentication/slider"
import { FiAlertCircle, FiEye, FiEyeOff } from "react-icons/fi"
import { Link } from "react-router-dom"


const ResetPassword = () => {
    const [show, setShow] = useState(false)
    const [focus, setFocus] = useState({

        email: false,
        password: false,
    })
    const [message, setMessage] = useState({

        email: "",
        password: "",
    })
    const [info, setInfo] = useState({

        email: "",
        password: "",
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-[45%_55%] w-full min-h-screen h-full gap-8 md:gap-0">
            <Slider />
            <div className="flex flex-col items-center w-full h-full justify-between gap-5  p-4 lg:p-8">
                <div className="flex flex-col gap-5 lg:max-w-sm w-full h-full flex-1  justify-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold ">Reset your password</h1>
                        <p className="text-sm text-[#64748B] font-normal">Enter the email address associated with your account and we will send you a link to reset your password.</p>
                    </div>
                    <form className="flex flex-col gap-5 w-full">

                        <div className="flex flex-col gap-3">
                            <div className={`flex items-center gap-1 border-2 transition-all ${focus.email ? message?.email != "" ? "border-[#ED4F9D]" : "border-[#333333]" : "border-[#E2E8F0]"} rounded-md  w-full px-3`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    onFocus={() => setFocus({ ...focus, email: true })}
                                    onBlur={() => setFocus({ ...focus, email: false })}
                                    className="p-2 focus:outline-none w-full border-none text-base font-semibold placeholder:font-normal placeholder:text-black"
                                    value={info.email}
                                    onChange={(e) => { e.target.value.length == 0 && e.target.value.length < 8 ? setMessage(prev => ({ ...prev, email: "" })) : setMessage(prev => ({ ...prev, email: "Email Already Exists" })); setInfo({ ...info, email: e.target.value }) }}
                                />
                            </div>
                            {
                                message.email && <p className="text-xs font-medium text-[#ED4F9D] flex items-center gap-2"><FiAlertCircle size={15} />{message.email}</p>


                            }
                        </div>
                       
                      
                        <button
                            type="submit"
                            className="p-3 bg-[#EEDFE2] text-base font-semibold rounded-md focus:outline-none"
                        >
                            Continue
                        </button>
                    </form>
                    {/* or login with */}
                    <div className="flex items-center gap-1 my-4 justify-center">
                           
                            <Link to="/login" className="text-sm text-[#ED0A8A] font-medium">Back to Sign In</Link>

                        </div>
                   
                   

                </div>
                    <div className="flex items-center justify-center gap-2 text-sm">
                        <p className=" font-normal">Don’t have an account?</p>
                        <Link to="/signUp" className="font-semibold text-[#ED0A8A]">Sign Up</Link>
                    </div>
            </div>
        </div>
    )
}

export default ResetPassword