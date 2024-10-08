

const PriceDisplay = ({ originalPrice, discountedPrice }) => {
    return (
        <div className="flex flex-col mt-2 items-center gap-2">
            <p className="text-gray-500 line-through text-xs">Rp {originalPrice}</p>
            <p className="text-primary font-bold text-sm">Rp {discountedPrice}</p>
        </div>
    );
};

export default PriceDisplay;
