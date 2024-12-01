

const Container = ({ children }) => {
    return (
        <div className="flex items-center justify-center">
            <div className="flex w-full flex-col gap-10 p-4 lg:p-8  2xl:px-24">{children}</div>
            </div>
    )
}

export default Container