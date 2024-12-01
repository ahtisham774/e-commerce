

const Statistics = () => {


    const data = [
        {
            id: 1,
            title: "Sellers active our site",
            stats: "10.5k",
            icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.1416 5H27.4883L28.3216 13.3333C28.3216 13.3333 29.9883 15 32.4883 15C33.8006 15.0017 35.0684 14.524 36.0533 13.6567C36.1574 13.5594 36.235 13.4372 36.2787 13.3016C36.3224 13.166 36.3309 13.0214 36.3033 12.8817L35.1266 5.83333C35.0873 5.60049 34.9668 5.38909 34.7865 5.23656C34.6062 5.08404 34.3778 5.00024 34.1416 5V5Z" stroke="#00FFFF" strokeWidth="3" />
                <path d="M27.4883 5L28.3216 13.3333C28.3216 13.3333 26.6549 15 24.1549 15C21.6549 15 19.9883 13.3333 19.9883 13.3333V5H27.4883Z" stroke="#00FFFF" strokeWidth="3" />
                <path d="M19.9881 5V13.3333C19.9881 13.3333 18.3215 15 15.8215 15C13.3215 15 11.6548 13.3333 11.6548 13.3333L12.4881 5H19.9881Z" stroke="#01FFFF" strokeWidth="3" />
                <path d="M12.4883 5H5.8366C5.59993 4.99991 5.37089 5.08377 5.19023 5.23666C5.00957 5.38955 4.88899 5.60157 4.84994 5.835L3.67494 12.8833C3.64747 13.0231 3.65601 13.1676 3.69974 13.3032C3.74348 13.4387 3.82097 13.5609 3.92494 13.6583C4.4716 14.1417 5.69327 15.0017 7.48827 15.0017C9.98827 15.0017 11.6549 13.335 11.6549 13.335L12.4883 5.00167V5Z" stroke="#12F8F6" strokeWidth="3" />
                <path d="M5 15V31.6667C5 32.5507 5.35119 33.3986 5.97631 34.0237C6.60143 34.6488 7.44928 35 8.33333 35H31.6667C32.5507 35 33.3986 34.6488 34.0237 34.0237C34.6488 33.3986 35 32.5507 35 31.6667V15" stroke="#FF0094" strokeWidth="3" />
                <path d="M24.7217 35V25C24.7217 24.1159 24.3705 23.2681 23.7454 22.6429C23.1202 22.0178 22.2724 21.6666 21.3883 21.6666H18.055C17.171 21.6666 16.3231 22.0178 15.698 22.6429C15.0729 23.2681 14.7217 24.1159 14.7217 25V35" stroke="#EC0B8B" strokeWidth="3" strokeMiterlimit="16" />
            </svg>
        },
        {
            id: 2,
            title: "Monthly Product Sale",
            stats: "33k",
            icon: <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.9998 37.2728C29.5392 37.2728 37.2725 29.5395 37.2725 20C37.2725 10.4606 29.5392 2.72729 19.9998 2.72729C10.4603 2.72729 2.72705 10.4606 2.72705 20C2.72705 29.5395 10.4603 37.2728 19.9998 37.2728Z" stroke="#01FFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M25.0909 14.547C24.7615 13.9758 24.283 13.505 23.7065 13.1848C23.13 12.8646 22.4772 12.7072 21.8181 12.7294H18.1818C17.2174 12.7294 16.2924 13.1124 15.6105 13.7941C14.9285 14.4759 14.5454 15.4005 14.5454 16.3647C14.5454 17.3288 14.9285 18.2535 15.6105 18.9353C16.2924 19.617 17.2174 20 18.1818 20H21.8181C22.7826 20 23.7075 20.383 24.3894 21.0648C25.0714 21.7465 25.4545 22.6712 25.4545 23.6354C25.4545 24.5995 25.0714 25.5242 24.3894 26.2059C23.7075 26.8877 22.7826 27.2707 21.8181 27.2707H18.1818C17.5227 27.2929 16.8699 27.1354 16.2934 26.8153C15.717 26.4951 15.2384 26.0242 14.909 25.453" stroke="#ED1270" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 8.18176V12.1212M20 27.8787V31.8181" stroke="#ED1270" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        },
        {
            id: 3,
            title: "Customer active in our site",
            stats: "45.5k",
            icon: <img src="/assets/customers.png" alt="customers"/>



        },
        {
            id: 4,
            title: "Annual gross sale in our site",
            stats: "25k",
            icon: <img src="/assets/sale.png" alt="sales"/>




        },

    ]



    return (
        <div className="flex flex-col w-full py-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {data.map((item) => (
                    <div key={item.id} className="flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#EEDFE2] transition-all p-4 py-8 border-2 border-[#EEDFE2] shadow-sm hover:shadow-lg rounded-lg">
                        <div className="flex items-center justify-center w-20 h-20 border-[12px] border-[#faf5f6] bg-[#EEDFE2] rounded-full">
                            {item.icon}
                        </div>
                        <p className="text-4xl font-bold">{item.stats}</p>
                        <h1 className="text-lg font-normal">{item.title}</h1>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Statistics