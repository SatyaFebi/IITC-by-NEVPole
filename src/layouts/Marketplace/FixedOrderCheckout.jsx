import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FixedOrderTotal = ({ selectedPaymentMethod }) => {
    const navigate = useNavigate();
    const [notification, setNotification] = useState(""); // State untuk menyimpan notifikasi

    const handleOrderClick = () => {
        if (!selectedPaymentMethod) {
            setNotification("Silakan pilih metode pembayaran terlebih dahulu."); // Set notifikasi jika tidak ada metode pembayaran

            // Menghilangkan notifikasi setelah 2 detik
            setTimeout(() => {
                setNotification(""); // Mengatur notifikasi menjadi kosong
            }, 2000);
            
            return; // Hentikan eksekusi jika metode pembayaran kosong
        }

        // Menggunakan template string untuk membangun URL
        navigate(`/order-status/${selectedPaymentMethod}`);
    };

    return (
        <>
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white shadow-md py-2 px-4 z-10">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <div className="text-[12px] font-bold mb-0.5 text-gray-800">
                            4 Items
                        </div>
                        <div className="text-[15px] font-bold mb-0.5 text-secondary">
                            Total Harga
                        </div>
                        <div className="text-[10px] font-extrabold text-gray-800">
                            Rp. 63.800
                        </div>
                    </div>

                    <button
                        className="bg-secondary hover:bg-primary transition-colors duration-150 text-white text-sm font-semibold py-2 px-4 rounded-full"
                        onClick={handleOrderClick}
                    >
                        PESAN SEKARANG
                    </button>
                </div>
            </div>

            {notification && (
                <div className="mt-2 p-2 bg-red-100 text-red-700 rounded-md text-sm fixed top-0 z-50">
                    {notification}
                </div>
            )}
        </>
    );
};

export default FixedOrderTotal;
