import { useState } from "react";

const Coupon = () => {
    const [showInput, setShowInput] = useState(false);

    const handleToggleInput = () => {
        setShowInput(!showInput);
    };

    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md cursor-pointer">
            <div
                className="flex flex-row justify-between items-center py-1 pb-0 px-5"
                onClick={handleToggleInput}
            >
                <div className="flex flex-row justify-between items-center">
                    <img
                        src="./icons/coupon.svg"
                        className="w-8 h-8"
                        alt="Dompet"
                    />
                    <p className="font-semibold ml-5 text-left text-md text-black">
                        Masukkan Kupon
                    </p>
                </div>

                <img
                    src="./icons/Vector.svg"
                    className={`w-2 h-3 transition-transform duration-300 ${
                        showInput ? "rotate-90" : ""
                    }`}
                    alt="Icon"
                />
            </div>

            {showInput && (
                <div className="mt-3">
                    <input
                        type="text"
                        placeholder="Masukan kode di sini"
                        className="w-full border border-black py-1 px-3 rounded-full"
                    />
                </div>
            )}
        </div>
    );
};

export default Coupon;
