
import { useNavigate } from "react-router-dom";

const FixedOrderBuy = () => {
    const navigate = useNavigate(); 

    const handleOrderClick = () => {
        navigate("/confirmation"); 
    };

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white shadow-md py-2 px-4 z-50">
            <div className="flex items-center justify-center">
                <button 
                    onClick={handleOrderClick} 
                    className="w-full flex flex-row justify-center items-center bg-red-500 rounded-full font-semibold py-2 text-center text-white hover:bg-red-600 transition duration-200"
                >
                    <img
                        src="./icons/Basket.svg"
                        alt="Keranjang"
                        className="w-5 h-5 mr-2"
                    />
                    <div className="">PESAN SEKARANG</div>
                </button>
            </div>
        </div>
    );
};

export default FixedOrderBuy;
