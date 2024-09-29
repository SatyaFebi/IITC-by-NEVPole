import { useState } from "react";

const QuantityControl = () => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);

    return (
        <div className="flex items-center justify-between w-full">
            <button
                onClick={handleDecrease}
                className="bg-red-500 text-white w-5 h-5 font-bold rounded-full text-sm flex items-center justify-center hover:bg-red-600 transition duration-200"
            >
                -
            </button>
            <span className="mx-4 text-lg font-semibold">{quantity}</span>
            <button
                onClick={handleIncrease}
                className="bg-red-500 text-white w-5 h-5 font-bold rounded-full text-sm flex items-center justify-center hover:bg-red-600 transition duration-200"
            >
                +
            </button>
        </div>
    );
};

export default QuantityControl;
