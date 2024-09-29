import { useState } from 'react';

const ProductDetailPopup = ({ product, onClose, onAddToCart }) => {
    const [selectedOrder, setSelectedOrder] = useState('');
    const [selectedToppings, setSelectedToppings] = useState([]);

    const handleToppingChange = (topping) => {
        if (selectedToppings.includes(topping)) {
            setSelectedToppings(selectedToppings.filter(t => t !== topping));
        } else {
            setSelectedToppings([...selectedToppings, topping]);
        }
    };

    const handleAddToCart = () => {
        onAddToCart({ ...product, selectedOrder, selectedToppings });
        onClose();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 w-1/3">
                <h2 className="text-lg font-bold">{product.itemName}</h2>
                <p>{product.description}</p>
                <p>Harga: {product.originalPrice}</p>

                <div className="mt-4">
                    <h3 className="font-semibold">Pilih Pesanan:</h3>
                    <label>
                        <input 
                            type="radio" 
                            value="Dine In" 
                            checked={selectedOrder === 'Dine In'} 
                            onChange={() => setSelectedOrder('Dine In')} 
                        /> Dine In
                    </label>
                    <label className="ml-4">
                        <input 
                            type="radio" 
                            value="Take Away" 
                            checked={selectedOrder === 'Take Away'} 
                            onChange={() => setSelectedOrder('Take Away')} 
                        /> Take Away
                    </label>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold">Topping:</h3>
                    <label>
                        <input 
                            type="checkbox" 
                            value="Keju" 
                            checked={selectedToppings.includes('Keju')} 
                            onChange={() => handleToppingChange('Keju')} 
                        /> Keju
                    </label>
                    <label className="ml-4">
                        <input 
                            type="checkbox" 
                            value="Saus Sambal" 
                            checked={selectedToppings.includes('Saus Sambal')} 
                            onChange={() => handleToppingChange('Saus Sambal')} 
                        /> Saus Sambal
                    </label>
                </div>

                <div className="mt-5 flex justify-between">
                    <button className="bg-red-500 text-white rounded px-3 py-1" onClick={onClose}>Close</button>
                    <button className="bg-blue-500 text-white rounded px-3 py-1" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPopup;
