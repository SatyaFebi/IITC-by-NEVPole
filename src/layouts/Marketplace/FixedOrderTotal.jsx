import { useNavigate } from 'react-router-dom';

const FixedOrderTotal = () => {
    const navigate = useNavigate();

    const handleOrderClick = () => {
        navigate('/order-status');
    };

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white shadow-md py-2 px-4 z-50">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="text-[12px] font-bold mb-0.5 text-gray-800">
                        5 Items
                    </div>
                    <div className="text-[15px] font-bold mb-0.5 text-red-500">
                        Total Harga
                    </div>
                    <div className="text-[10px] font-extrabold text-gray-800">
                        Rp. 250.000
                    </div>
                </div>

                <button
                    className="bg-red-500 text-white text-sm font-semibold py-2 px-4 rounded-full"
                    onClick={handleOrderClick}
                >
                    PESAN SEKARANG
                </button>
            </div>
        </div>
    );
};

export default FixedOrderTotal;
