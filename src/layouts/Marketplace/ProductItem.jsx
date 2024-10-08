import React from "react";
import PriceDisplay from "./PriceDisplay";

const ProductItem = ({ itemName, description, originalPrice, discountedPrice, rating, onAddClick }) => {

    const getBackgroundColor = () => {
        if (rating > 4) return "bg-success"; 
        if (rating > 3) return "bg-[#BBB300]"; 
        if (rating > 2) return "bg-danger";
        if (rating === 1) return "bg-black"; 
        return "bg-gray-300";
    };

    return (
        <div className="flex flex-row justify-between items-center border-b py-4 bg-white">
            <div className="relative flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-md"></div>
                <button 
                    className="absolute -bottom-4 hover:-translate-y-1 transition-all duration-500 left-1/2 w-fit transform -translate-x-1/2 text-[26px] text-white bg-secondary border font-semibold text-lg px-3 py-0.5 rounded-full mt-2" 
                    onClick={onAddClick}
                >
                    +
                </button>
            </div>

            <div className="ml-4 flex-1">
                <h3 className="font-bold text-md">{itemName}</h3>
                <p className="text-xs text-gray-600 leading-tight mr-2">
                    {description}
                </p>
                <div className="flex flex-row justify-between items-end">
                    <div className="flex flex-col items-start">
                        <PriceDisplay
                            originalPrice={originalPrice}
                            discountedPrice={discountedPrice}
                        />
                    </div>
                    <div className={`flex flex-row justify-between rounded-md shadow-md items-center h-6 text-[10px] py-0.5 px-1.5 text-white ${getBackgroundColor()}`}>
                        <img
                            src="./images/stars.svg"
                            alt=""
                            className="w-3 h-3 mr-1"
                        />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
