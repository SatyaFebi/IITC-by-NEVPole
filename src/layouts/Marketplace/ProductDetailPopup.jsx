import { useState } from 'react';

const ProductDetailPopup = ({ product, onClose, onAddToCart }) => {
    const [selectedOrder, setSelectedOrder] = useState('');
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [quantity, setQuantity] = useState(1); // untuk handle jumlah pesanan
    const [isClosing, setIsClosing] = useState(false); // State untuk animasi penutupan

    const handleToppingChange = (topping) => {
        if (selectedToppings.includes(topping)) {
            setSelectedToppings(selectedToppings.filter(t => t !== topping));
        } else {
            setSelectedToppings([...selectedToppings, topping]);
        }
    };

    const handleAddToCart = () => {
        onAddToCart({ ...product, selectedOrder, selectedToppings, quantity });
        handleClose(); // Panggil fungsi close
    };

    const incrementQuantity = () => setQuantity(quantity + 1);
    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 200); // Sesuaikan dengan durasi animasi
    };

    return (
        <div className="fixed inset-0 flex z-30 items-center justify-center bg-black bg-opacity-50">
            {/* Tambahkan kelas animasi */}
            <div className={`bg-white rounded-t-3xl z-40 max-w-sm p-5 bottom-0 absolute ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}>
                {/* Close Button */}
                <button className="absolute top-4 right-4 text-red-500 font-bold text-xl" onClick={handleClose}>✖</button>

                {/* Product Info */}
                <h2 className="text-lg font-bold mb-1">{product.itemName}</h2>
                <p className="text-red-500 font-semibold">Rp {product.originalPrice}</p>
                <p className="text-sm text-gray-500 mb-4">{product.description}</p>

                {/* Pilihan Pesanan */}
                <div className="border-t border-b py-2 mb-2">
                    <h3 className="font-semibold">Pilihan Pesanan</h3>
                    <div className="mt-2">
                        <label className="flex items-center justify-between">
                            <span>Styrofoam</span>
                            <span>Rp 25.000</span>
                            <input 
                                type="radio" 
                                checked={selectedOrder === 'Styrofoam'} 
                                onChange={() => setSelectedOrder('Styrofoam')} 
                            />
                        </label>
                    </div>
                </div>

                {/* Tambahan Topping */}
                <div className="border-b py-2 mb-2">
                    <h3 className="font-semibold">Tambahan Topping</h3>
                    <div className="mt-2">
                        <label className="flex items-center justify-between border-b mt-5">
                            <span>Telur Rebus Setengah Matang</span>
                            <span>Rp 25.000</span>
                            <input 
                                type="checkbox" 
                                checked={selectedToppings.includes('Telur Rebus Setengah Matang')} 
                                onChange={() => handleToppingChange('Telur Rebus Setengah Matang')} 
                            />
                        </label>
                        <label className="flex items-center justify-between border-b mt-5">
                            <span>Telur Hangat</span>
                            <span>Rp 25.000</span>
                            <input 
                                type="checkbox" 
                                checked={selectedToppings.includes('Telur Hangat')} 
                                onChange={() => handleToppingChange('Telur Hangat')} 
                            />
                        </label>
                    </div>
                </div>

                {/* Quantity Section */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <button onClick={decrementQuantity} className="bg-secondary text-white px-2 py-1 rounded-full h-fit">-</button>
                        <span className="mx-3">{quantity}</span>
                        <button onClick={incrementQuantity} className="bg-secondary text-white px-2 py-1 rounded-full h-fit">+</button>
                    </div>
                    <button 
                        className="bg-secondary text-white font-semibold px-4 py-2 rounded-full" 
                        onClick={handleAddToCart}
                    >
                        MASUKAN KERANJANG
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPopup;
