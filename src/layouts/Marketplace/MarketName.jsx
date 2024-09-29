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
                        <div className="bg-green-400 rounded-md px-2 py-1 text-white text-xs flex flex-row">
                            4.9
                        </div>
                        <div className="w-px h-6 bg-black mx-2"></div>
                        <div className="bg-red-500 rounded-full px-3 py-1 text-white text-xs flex flex-row">
                            Meja 6
                        </div>
                        <div className="w-px h-6 bg-black mx-2"></div>
                        <p className="text-xs font-bold text-black">
                            Cibinong, Indonesia
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={handleCouponClick} className="flex flex-row justify-between items-center rounded-md w-full h-fit py-2 px-5 border-2 mt-3">
                <img src="./images/Kupon.png" className="w-7 h-7" alt="" />
                <p className="text-xs font-semibold text-black">Apakah anda memiliki voucher?</p>
                <img 
                    src="./icons/Vector.png" 
                    className={`w-2 h-3 transition-transform duration-300 ${showCouponInput ? 'rotate-90' : ''}`} 
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
                    <div className="bg-red-500 text-white text-[12px] font-bold px-6 py-1 ml-2 rounded-md">CEK</div>
                </div>
            )}
        </div>
    );
};

export default MarketName;
