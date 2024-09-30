import { useState, useEffect } from "react";

const Payment = ({ onSelectPaymentMethod }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [option, setOption] = useState("");
    const [payment, setPayment] = useState("");
    const [animationClass, setAnimationClass] = useState("");

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionSelect = (selectedOption) => {
        setOption(selectedOption);

        const paymentMethod = selectedOption === "QRIS" ? "qris" : "cashier";
        setPayment(paymentMethod);
        onSelectPaymentMethod(paymentMethod);
        setShowOptions(false);
    };

    useEffect(() => {
        setAnimationClass(showOptions ? "slide-down" : "slide-up");
    }, [showOptions]);

    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md cursor-pointer">
            <div
                className="flex flex-row justify-between items-center py-1 pb-0 px-5"
                onClick={handleToggleOptions}
            >
                <div className="flex flex-row justify-between items-center">
                    <img
                        src="./images/wallet.svg"
                        className="w-9 h-8"
                        alt="Dompet"
                    />
                    <p className="font-semibold ml-4 text-left text-md text-black">
                        {option ? `Metode: ${option}` : "Metode Pembayaran"}
                    </p>
                </div>

                <img
                    src="./icons/Vector.svg"
                    className={`w-2 h-3 transition-transform duration-300 ${
                        showOptions ? "rotate-90" : ""
                    }`}
                    alt="Icon"
                />
            </div>

            <div
                className={`mt-2 overflow-hidden transition-all duration-300 ${animationClass}`}
            >
                {showOptions && (
                    <ul className="w-full bg-white border border-gray-300 rounded-md transition-all duration-300">
                        <li
                            className="p-2 hover:bg-gray-100 cursor-pointer font-bold flex flex-row text-sm"
                            onClick={() => handleOptionSelect("QRIS")}
                        >
                            <img
                                src="./icons/qr-code.svg"
                                alt=""
                                className="mr-2 w-6 h-5"
                            />
                            QRIS / PEMBAYARAN ONLINE
                        </li>
                        <li
                            className="p-2 hover:bg-gray-100 cursor-pointer flex flex-row font-bold text-sm"
                            onClick={() => handleOptionSelect("Bayar Ke Kasir")}
                        >
                            <img
                                src="./icons/cashier.svg"
                                alt=""
                                className="mr-2 w-6 h-5"
                            />
                            BAYAR KE KASIR
                        </li>
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Payment;
