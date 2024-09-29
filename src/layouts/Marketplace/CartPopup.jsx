import { useState, useEffect } from 'react';

const CartPopup = ({ cartItems, onClose, onProceedToPayment }) => {
    const [selectedItems, setSelectedItems] = useState(new Set(cartItems)); // Awalnya centang semua item
    const [isClosing, setIsClosing] = useState(false); // State untuk animasi penutupan

    useEffect(() => {
        // Mengatur semua item tercentang ketika komponen pertama kali dimuat
        const initialSelection = new Set(cartItems);
        setSelectedItems(initialSelection);
    }, [cartItems]); // Tambahkan cartItems sebagai dependensi

    const handleItemSelection = (item) => {
        const updatedSelection = new Set(selectedItems);
        if (updatedSelection.has(item)) {
            updatedSelection.delete(item);
        } else {
            updatedSelection.add(item);
        }
        setSelectedItems(updatedSelection);
    };

    const calculateTotal = () => {
        return Array.from(selectedItems).reduce((total, item) => total + item.price, 0);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Sesuaikan dengan durasi animasi
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            {/* Menggunakan kelas animasi untuk popup */}
            <div className={`bg-white rounded-t-3xl p-5 w-11/12 max-w-sm bottom-0 md:w-1/3 absolute ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}>
                {/* Close Button */}
                <button className="absolute top-3 right-3 text-secondary font-bold text-xl" onClick={handleClose}>✖</button>

                {/* Title and Total */}
                <h2 className="text-lg font-bold mb-1">PESANANKU</h2>
                <div className="flex justify-between mb-4">
                    <p className="font-semibold">Total</p>
                    <p className="text-secondary font-semibold">Rp {calculateTotal().toLocaleString()}</p>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                    Harga belum termasuk PPN, Harga hanya produk yang kamu pilih.
                    Silakan Lanjut ke pembayaran untuk konfirmasi.
                </p>

                {/* Daftar Pesanan */}
                <h3 className="font-bold mb-2">KERANJANG SAYA</h3>
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Keranjang Anda kosong.</p>
                ) : (
                    <div className="mb-4">
                        {cartItems.map((item) => (
                            <label key={item.name} className="flex items-center justify-between mb-2 border-b pb-2">
                                <span>{item.name}</span>
                                <span className="text-red-500">Rp {item.price.toLocaleString()}</span>
                                <input 
                                    type="checkbox" 
                                    checked={selectedItems.has(item)} 
                                    onChange={() => handleItemSelection(item)} 
                                    className="ml-2" // Styling checkbox
                                />
                            </label>
                        ))}
                    </div>
                )}

                {/* Total Section & Proceed Button */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <p className="font-semibold">Total</p>
                        <p className="ml-4 text-secondary font-semibold">Rp {calculateTotal().toLocaleString()}</p>
                    </div>
                    <button 
                        className="bg-secondary text-white font-semibold px-3 py-2 rounded-lg" 
                        onClick={onProceedToPayment}
                    >
                        LANJUT PEMBAYARAN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPopup;
