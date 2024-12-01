import { useEffect, useState } from "react";
import slider from "/assets/signup_cover.svg";

const Slider = () => {
    const [activeItem, setActiveItem] = useState(0);
    const sliders = [
        {
            img: slider,
            title: "Welcome to our platform",
            description: "Everything you need in an easily customizable dashboard."
        },
        {
            img: slider,
            title: "You are welcome",
            description: "Everything you need in an easily customizable dashboard."
        },
        {
            img: slider,
            title: "Welcome to our platform",
            description: "Everything you need in an easily customizable dashboard."
        }
    ];

    const length = sliders.length;

    const handleNext = () => {
        setActiveItem((prevIndex) => (prevIndex + 1) % length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full bg-slider flex items-center justify-center p-4 lg:p-8">
            <div className="flex flex-col items-center w-full justify-center gap-5">
                <div className="relative overflow-hidden w-full">
                    <div
                        className="w-full h-full flex transition-transform duration-[2s] ease-in-out"
                        style={{ transform: `translateX(-${activeItem * 100}%)` }}
                    >
                        {sliders.map((slider, index) => (
                            <div key={index} className="flex flex-col w-full shrink-0 items-center backdrop-blur-lg justify-center gap-3">
                                <div className="flex items-center justify-center text-center h-[20rem] animate-tb">
                                    <img src={slider.img} alt="slider" className="h-full max-w-full block object-cover" />
                                </div>
                                <h1 className="text-2xl font-bold text-center">{slider.title}</h1>
                                <p className="text-sm font-normal text-[#333333] text-center">{slider.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex gap-2">
                    {sliders.map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-[2s] ${activeItem === index ? "bg-[#ED1270]" : "bg-[#00FFFF]"}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Slider;
