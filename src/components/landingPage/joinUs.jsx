import Container from "../../utils/container"
import Title from "./title"



const JoinUs = () => {
    const description = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    `
    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-10 w-full">
                <div className="flex flex-col gap-8 md:w-1/2">
                    <Title text="why Join Us" />
                    <p className="text-lg whitespace-pre-line font-['Poppins'] text-shadow-sm">{description}</p>
                </div>
                <div className="flex w-full md:w-1/2">
                    <img src="/assets/joinUs.png" alt="join-us" className="w-full h-full object-cover shadow-md border rounded-lg" />
                </div>

            </div>
        </Container>
    )
}

export default JoinUs