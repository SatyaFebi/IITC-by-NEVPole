import { useState } from "react";

const MarketName = () => {
    const [showCouponInput, setShowCouponInput] = useState(false);
    const [couponCode, setCouponCode] = useState("");

    const handleCouponClick = () => {
        setShowCouponInput(!showCouponInput);
    };

    const handleCouponChange = (e) => {
        setCouponCode(e.target.value);
    };

    return (
        <div className="flex flex-col rounded-md w-full transition-all h-fit py-4 px-3 shadow-md">
            <div className="flex flex-row">
                <div className="w-14 h-14 rounded-md bg-slate-200 shadow-md"></div>
                <div className="flex flex-col ml-3 justify-start">
                    <h2 className="font-bold text-md">
                        Warkop Babeh, SMKN 1 Cibinong
                    </h2>
                    <div className="flex flex-row mt-2 items-center">
                        <div className="bg-success rounded-md px-2 py-1 items-center text-white flex flex-row">
                            <svg
                                width="10"
                                height="11"
                                viewBox="0 0 10 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 8.49433L7.42493 10.0289C7.86901 10.3102 8.41243 9.89444 8.29556 9.36863L7.65281 6.48281L9.79727 4.53855C10.1888 4.18393 9.9784 3.51139 9.4642 3.46859L6.64194 3.21792L5.53757 0.491056C5.33891 -0.00418026 4.6611 -0.00418026 4.46243 0.491056L3.35806 3.2118L0.535797 3.46248C0.021595 3.50528 -0.18876 4.17782 0.202734 4.53243L2.34719 6.4767L1.70444 9.36252C1.58757 9.88833 2.13099 10.3041 2.57507 10.0228L5 8.49433Z"
                                    fill="white"
                                />
                            </svg>
                            <div className="ml-1 text-[10px]">4.9</div>
                        </div>
                        <div className="w-px h-6 bg-black mx-2"></div>
                        <div className="bg-secondary rounded-full px-3 py-1 text-white text-[10px]  items-center flex flex-row">
                            Meja 6
                        </div>
                        <div className="w-px h-6 bg-black mx-2"></div>
                        <p className="text-xs font-bold text-black">
                            Cibinong, Indonesia
                        </p>
                    </div>
                </div>
            </div>
            <button
                onClick={handleCouponClick}
                className="flex flex-row justify-between items-center rounded-md w-full h-fit py-2 px-5 border-2 mt-3"
            >
                <img src="./images/Kupon.png" className="w-7 h-7" alt="" />
                <p className="text-xs font-semibold text-black">
                    Apakah anda memiliki voucher?
                </p>
                <img
                    src="./icons/Vector.svg"
                    className={`w-2 h-3 transition-transform duration-300 ${
                        showCouponInput ? "rotate-90" : ""
                    }`}
                    alt=""
                />
            </button>
            {showCouponInput && (
                <div className="mt-2 py-2 flex flex-row items-center justify-between">
                    <input
                        type="text"
                        value={couponCode}
                        onChange={handleCouponChange}
                        placeholder="Masukkan kode voucher"
                        className="border rounded-md p-1 text-xs w-full"
                    />
                    <div className="bg-secondary text-white text-[12px] font-bold px-6 py-1 ml-2 rounded-md">
                        CEK
                    </div>
                </div>
            )}
        </div>
    );
};

export default MarketName;
