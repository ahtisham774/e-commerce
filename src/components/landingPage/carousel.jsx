import { useEffect, useState } from "react";
import img from "/assets/s1.png";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        img,
        img,
        img
    ];

    const totalImages = images.length;

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col gap-3 bg-[#f5f5f5] justify-center items-center">
            <div className="relative w-full h-[20rem] lg:h-[30.5rem]  overflow-hidden">
                <div
                    className="absolute w-full h-full flex transition-transform duration-1000 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`carousel-${index}`}
                            className="w-full h-full object-cover "
                        />
                    ))}
                </div>


            </div>
            <div className="flex gap-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-[#4CC7EF]" : "bg-[#ED1270]"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
