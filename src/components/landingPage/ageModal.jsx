import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const AgeModal = ({ handleAge }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show the modal after 1500 ms
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 800);

        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        if (isVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isVisible])




    const handleYes = () => {
        setIsVisible(false);
    };
    const handleNo = () => {
        handleAge(false)
        setIsVisible(false);
    }

    return (
        <>
            {isVisible && (
                <div className="modal-overlay">
                    <div className="modal bg border-2 p-10 border-black w-full max-w-xl flex flex-col gap-5 items-center justify-center">
                        <h2 className='text-2xl font-bold'>Are you 18 years of age or older?</h2>
                        <div className="flex items-center gap-5">
                            <button onClick={handleYes} className={`px-4 py-1.5 w-[145px] font-bold uppercase btn_br bg-[#EEDFE2] rounded-lg shadow-lg`}>Yes</button>
                            <button onClick={handleNo} className={`px-4 py-1.5 w-[145px] font-bold uppercase bg-white rounded-lg shadow-lg`}>No</button>

                        </div>
                    </div>
                </div>
            )}

        </>
    );
};
AgeModal.propTypes = {
    handleAge: PropTypes.func
}
export default AgeModal;
