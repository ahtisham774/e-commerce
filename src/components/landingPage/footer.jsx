import { useEffect, useState } from "react"
import Container from "../../utils/container"


const ShowCookiePolicy = ({ open, handleClose }) => {
    return (
        <div className={`bg-black text-white p-2  rounded max-w-[542px] animate_opacity fixed bottom-0 left-0 z-50 ${open ? "block" : "hidden"}`}>
            <div className="flex items-center justify-end">
                <button onClick={handleClose} className="border-none outline-none ">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9027 14.1177C12.7403 14.1178 12.5794 14.0858 12.4293 14.0235C12.2792 13.9612 12.1429 13.8699 12.0283 13.7547L0.36071 2.08881C0.139334 1.85466 0.0180282 1.54338 0.0225848 1.22118C0.0271414 0.898976 0.157201 0.591258 0.38511 0.363457C0.613019 0.135656 0.920797 0.00574109 1.243 0.00133645C1.56521 -0.00306819 1.87642 0.118386 2.11047 0.339872L13.778 12.005C13.9509 12.178 14.0686 12.3984 14.1162 12.6383C14.1639 12.8782 14.1394 13.1269 14.0458 13.3528C13.9522 13.5788 13.7938 13.772 13.5905 13.908C13.3872 14.044 13.1482 14.1167 12.9036 14.1169L12.9027 14.1177Z" fill="white" />
                        <path d="M1.23637 14.1177C0.991782 14.1175 0.752742 14.0448 0.549443 13.9088C0.346145 13.7729 0.187705 13.5797 0.0941347 13.3537C0.000564244 13.1277 -0.0239389 12.8791 0.0237187 12.6392C0.0713763 12.3993 0.189057 12.1789 0.361899 12.0058L12.0278 0.338249C12.262 0.116873 12.5732 -0.00443271 12.8954 0.000123875C13.2177 0.00468046 13.5254 0.13474 13.7532 0.362649C13.981 0.590558 14.1109 0.898336 14.1153 1.22054C14.1197 1.54275 13.9982 1.85396 13.7768 2.08801L2.11166 13.7556C1.997 13.8707 1.86072 13.962 1.71065 14.0243C1.56058 14.0866 1.39968 14.1186 1.23719 14.1186L1.23637 14.1177Z" fill="white" />
                    </svg>
                </button>
            </div>
            <p className="text-sm">TWe use first-party and third-party cookies to understand how our online store is used and to enable us to improve it, adapt the content to your preferences, and personalize our advertisements, marketing and publications on social media. For more information, please see our <a href="#" className="font-bold">Cookie Policy</a></p>

        </div>
    )
}





const Footer = () => {

    const [ShowPopup, setShowPopup] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true)
        }, 1500)
    }, [])

    const data = [
        {
            title: "Support",
            isLinks: false,
            items: [
                `111 Bijoy sarani, Dhaka,
                    DH 1515, Bangladesh.`,
                'exclusive@gmail.com',
                '+88015-88888-9999'
            ]
        },
        {
            title: "Account",
            isLinks: true,
            items: [
                { text: `My Account`, link: '/' },
                { text: 'Login / Register', link: '/' },
                { text: 'Cart', link: '/' },
                { text: 'Wishlist', link: '/' },
                { text: 'Shop', link: '/' }
            ]
        },
        {
            title: "Quick Link",
            isLinks: true,
            items: [

                { text: 'Privacy Policy', link: '/' },
                { text: 'Terms & Conditions', link: '/' },
                { text: 'FAQ', link: '/' },
                { text: 'Contact', link: '/' }

            ]
        },
    ]

    return (
        <div className="bg" >
            <Container>
                <div className="flex flex-col gap-8 w-full">
                    <div className="grid grid-cols-1 w-fit min-[400px]:grid-cols-2 min-[600px]:grid-cols-3 min-[800px]:grid-cols-4 xl:grid-cols-[17%_15%_15%_15%_25%] gap-16">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-3xl font-bold">Exclusive</h2>
                            <h4 className="text-xl font-medium font-['Poppins']">Subscribe</h4>
                            <p className="text-sm font-['Poppins']">Get 10% off your first order</p>
                            <div className="flex flex-row gap-3 border-2  overflow-hidden rounded border-black">
                                <input type="email" placeholder="Enter your email" className="border-none box-border w-full bg-transparent outline-none p-2" />
                                <button className="m-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.91196 12H3.99996L2.02296 4.135C2.0103 4.08929 2.00259 4.04235 1.99996 3.995C1.97796 3.274 2.77196 2.774 3.45996 3.104L22 12L3.45996 20.896C2.77996 21.223 1.99596 20.737 1.99996 20.029C2.00198 19.9657 2.0131 19.9031 2.03296 19.843L3.49996 15" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        {
                            data.map((item, index) => (
                                <div key={index} className="flex flex-col gap-4 font-['Poppins']">
                                    <h4 className="text-xl font-medium">{item.title}</h4>
                                    {
                                        item.isLinks ? (
                                            item.items.map((link, index) => (
                                                <a key={index} href={link.link} className="text-sm">{link.text}</a>
                                            ))
                                        ) : (
                                            item.items.map((text, index) => (
                                                <p key={index} className="text-sm whitespace-pre-line">{text}</p>
                                            ))
                                        )
                                    }
                                </div>
                            ))
                        }
                        <div className="flex flex-col gap-4 font-['Poppins']">
                            <h4 className="text-xl font-medium">Download App</h4>
                            <small className="text-xs">Save $3 with App New User Only</small>
                            <div className="flex gap-2">
                                <div className="bg-black flex items-center justify-center"><img src="/assets/qr.jpg" alt="playStore" className="h-auto w-[100px] mix-blend-screen" /></div>
                                <div className="flex flex-col gap-2">
                                    <button className="flex items-center gap-2 bg-black rounded-md px-4 py-1.5">
                                        <img src="/assets/playStore.png" alt="playStore" className="h-6 w-6" />
                                        <div className="flex flex-col whitespace-nowrap items-start">
                                            <span className="text-white uppercase text-[10px] font-medium">Get it on</span>
                                            <span className="text-white">Google Play</span>
                                        </div>
                                    </button>
                                    <button className="flex items-center gap-2 bg-black rounded-md px-4 py-1.5">
                                        <img src="/assets/playStore.png" alt="playStore" className="h-6 w-6" />
                                        <div className="flex flex-col whitespace-nowrap items-start">
                                            <span className="text-white capitalize text-[10px] font-medium">download on the</span>
                                            <span className="text-white">App Store</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center gap-5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z" fill="black" />
                                </svg>
                                <img src="/assets/twitter.jpg" alt="twitter" className="size-7 mix-blend-multiply" />
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 3H7C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7V17C3 18.0609 3.42143 19.0783 4.17157 19.8284C4.92172 20.5786 5.93913 21 7 21H17C18.0609 21 19.0783 20.5786 19.8284 19.8284C20.5786 19.0783 21 18.0609 21 17V7C21 5.93913 20.5786 4.92172 19.8284 4.17157C19.0783 3.42143 18.0609 3 17 3Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z" stroke="black" stroke-width="1.5" stroke-linejoin="round" />
                                    <path d="M17.5 7.5C17.7652 7.5 18.0196 7.39464 18.2071 7.20711C18.3946 7.01957 18.5 6.76522 18.5 6.5C18.5 6.23478 18.3946 5.98043 18.2071 5.79289C18.0196 5.60536 17.7652 5.5 17.5 5.5C17.2348 5.5 16.9804 5.60536 16.7929 5.79289C16.6054 5.98043 16.5 6.23478 16.5 6.5C16.5 6.76522 16.6054 7.01957 16.7929 7.20711C16.9804 7.39464 17.2348 7.5 17.5 7.5Z" fill="black" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z" fill="black" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-sm font-['Poppins'] text-[#00A0A0]">© Copyright Rimel {new Date().getFullYear()}. All right reserved</p>


                    </div>

                    <ShowCookiePolicy open={ShowPopup} handleClose={() => setShowPopup(false)} />

                </div>
            </Container>

        </div >
    )
}

export default Footer