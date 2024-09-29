import { useState } from "react";

const Coupon = () => {
    const [showInput, setShowInput] = useState(false);

    const handleToggleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md cursor-pointer">
            <div
                className="flex flex-row justify-between items-center py-1 px-5"
                onClick={handleToggleInput}
            >
                <img src="./images/Kupon.png" className="w-8 h-8" alt="Kupon" />
                <p className="font-semibold text-left text-md text-black">
                    Masukan Kode Promo
                </p>
                <img
                    src="./icons/Vector.png"
                    className={`w-2 h-3 transition-transform duration-300 ${showInput ? 'rotate-90' : ''}`}
                    alt="Icon"
                />
            </div>

            {showInput && (
                <div className="mt-3">
                    <input
                        type="text"
                        placeholder="Masukkan kode di sini"
                        className="w-full border border-black py-1 px-3 rounded-full"
                    />
                </div>
            )}
        </div>
    );
};

export default Coupon;
