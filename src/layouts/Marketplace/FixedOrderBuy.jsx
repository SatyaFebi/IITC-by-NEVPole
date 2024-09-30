import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CartPopup from "./CartPopup"; // Import komponen popup yang sudah kita buat

const FixedOrderBuy = () => {
    const navigate = useNavigate();
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State untuk mengelola popup

    const handleOrderClick = () => {
        setIsPopupOpen(true); // Buka popup saat tombol ditekan
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false); // Tutup popup
    };

    const handleProceedToPayment = () => {
        setIsPopupOpen(false); // Tutup popup setelah klik "Lanjut Pembayaran"
        try {
            navigate("/confirmation"); // Arahkan ke halaman konfirmasi
        } catch (error) {
            console.error("Navigasi gagal:", error);
        }
    };

    const cartItems = [
        { name: "Ayam Bakar Iga", price: 25000 },
        { name: "Ayam Penyet", price: 25000 },
        { name: "Teh Manis", price: 3000 },
        { name: "Kopi Susu", price: 5000 },
    ];

    return (
        <>
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white shadow-md py-2 px-4 z-10">
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleOrderClick}
                        aria-haspopup="true"
                        aria-expanded={isPopupOpen}
                        className="w-full flex flex-row justify-center items-center bg-secondary rounded-full font-semibold py-2 text-center text-white hover:bg-primary transition duration-200"
                    >
                        <img
                            src="./icons/Basket.svg"
                            alt="Keranjang"
                            className="w-5 h-5 mr-2"
                        />
                        <span>PESAN SEKARANG</span>
                        <div className="flex text-center justify-center items-center bg-black w-6 h-6 text-white font-medium text-sm ml-2 rounded-full">
                            4
                        </div>
                    </button>
                </div>
            </div>
            {isPopupOpen && (
                <CartPopup
                    cartItems={cartItems}
                    onClose={handleClosePopup}
                    onProceedToPayment={handleProceedToPayment}
                />
            )}
        </>
    );
};

export default FixedOrderBuy;
