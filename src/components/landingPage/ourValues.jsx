import Container from "../../utils/container"
import Statistics from "./statistics"
import Title from "./title"
import ValueCard from "./valueCard"
import v1 from "/assets/v1.png"
import v2 from "/assets/v2.png"
import v3 from "/assets/v3.jpg"
const OurValues = () => {
    const values = [
        v1, v2, v3

    ]
    return (
        <Container>
            <div className="flex flex-col gap-8 w-full justify-center">
                <Title text="Our Values" />

                <div className="overflow-x-auto snap-x">
                    <div className="flex items-center snap-center justify-between w-auto  gap-5 relative">
                        {
                            values.map((item, i) => (
                                <ValueCard key={i} img={item} />
                            ))
                        }
                    </div>
                </div>
                <Statistics />
            </div>

        </Container>
    )
}

export default OurValues