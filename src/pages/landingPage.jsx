import { useState } from "react"
import AgeModal from "../components/landingPage/ageModal"
import Carousel from "../components/landingPage/carousel"
import Customers from "../components/landingPage/customers"
import Footer from "../components/landingPage/footer"
import JoinUs from "../components/landingPage/joinUs"
import Navbar from "../components/landingPage/navbar"
import OurValues from "../components/landingPage/ourValues"


const LandingPage = () => {
    const [isAboveAge, setIsAboveAge] = useState(true)
    return (
        <div className="flex flex-col">
            <AgeModal handleAge={setIsAboveAge} />
            <Navbar />
            {
                isAboveAge ?
                    <>
                        <Carousel />
                        <JoinUs />
                        <OurValues />
                        <Customers />
                        <Footer />
                    </>
                    :
                    <div className="flex flex-col items-center justify-center w-full h-full min-h-[calc(100dvh-150px)] gap-5 p-4 md:p-8 lg:p-24">
                        <h1 className="text-6xl font-bold text-center">WE ARE SORRY :-(</h1>
                        <p className="text-2xl font-bold text-center">We appreciate your interest in our website, but we must inform you that access is restricted to individuals who are 18 years of age or older. If you are not 18, we regret to inform you that you won&apos;t be able to access the content on this platform.
                        </p>


                    </div>
            }


        </div>
    )
}

export default LandingPage