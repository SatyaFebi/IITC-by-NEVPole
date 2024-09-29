
import QuantityControl from "./QuantityControl";
import PriceDisplay from "./PriceDisplay";

const OrderItem = ({
    itemName,
    description,
    originalPrice,
    discountedPrice,
}) => {
    return (
        <div className="flex flex-row justify-between items-center border-b py-4 bg-white">
            <div className="relative flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-md"></div>
                <button className="absolute -bottom-2 left-1/2 w-16 transform -translate-x-1/2 text-[10px] bg-white border border-gray-400 px-2 py-1 rounded-md mt-2">
                    Add Note
                </button>
            </div>

            <div className="ml-4 flex-1">
                <h3 className="font-bold text-md">{itemName}</h3>
                <p className="text-xs text-gray-600 leading-tight mr-2">
                    {description}
                </p>
                <a href="#" className="text-red-600 text-sm mt-2 inline-block">
                    Edit Pesanan ✏️
                </a>
            </div>

            <div className="flex flex-col items-end">
                <QuantityControl />
                <PriceDisplay
                    originalPrice={originalPrice}
                    discountedPrice={discountedPrice}
                />
            </div>
        </div>
    );
};

export default OrderItem;
