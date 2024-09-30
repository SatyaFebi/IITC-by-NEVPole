import { useState } from "react";
import QuantityControl from "./QuantityControl";
import PriceDisplay from "./PriceDisplay";
import NotePopup from "./NotePopup"; // Import NotePopup
import ProductDetailPopup from "./ProductDetailPopup"; // Import ProductDetailPopup

const OrderItem = ({
    itemName,
    description,
    originalPrice,
    discountedPrice,
}) => {
    const [isNotePopupOpen, setIsNotePopupOpen] = useState(false); // State untuk mengontrol popup catatan
    const [isProductDetailPopupOpen, setIsProductDetailPopupOpen] =
        useState(false); // State untuk mengontrol popup detail produk

    const handleOpenNotePopup = () => {
        setIsNotePopupOpen(true);
    };

    const handleCloseNotePopup = () => {
        setIsNotePopupOpen(false);
    };

    const handleOpenProductPopup = () => {
        setIsProductDetailPopupOpen(true);
    };

    const handleCloseProductPopup = () => {
        setIsProductDetailPopupOpen(false);
    };

    const product = {
        itemName,
        description,
        originalPrice,
        discountedPrice,
        // Tambahkan atribut yang diperlukan untuk ProductDetailPopup
    };

    return (
        <>
            <div className="flex flex-row justify-between items-start border-b py-4 bg-white">
                <div className="relative flex flex-col items-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-md"></div>
                    <button
                        className="absolute -bottom-2 left-1/2 w-16 transform -translate-x-1/2 text-[10px] bg-white border border-gray-400 px-1 py-0.5 rounded-md"
                        onClick={handleOpenNotePopup}
                        aria-label="Add Note"
                    >
                        Add Note
                    </button>
                </div>

                <div className="ml-4 flex-1">
                    <h3 className="font-semibold text-md">{itemName}</h3>
                    <p className="text-sm text-gray-600 leading-tight mr-2">
                        {description}
                    </p>
                    <a
                        href="#"
                        className="flex flex-row items-center text-primary text-sm mt-2"
                        onClick={handleOpenProductPopup}
                    >
                        <div className="mr-2">Edit Pesanan</div>
                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2.58824 3.11768H2.05883C1.77801 3.11768 1.50869 3.22923 1.31012 3.4278C1.11155 3.62637 1 3.89569 1 4.17651V8.94124C1 9.22206 1.11155 9.49137 1.31012 9.68994C1.50869 9.88851 1.77801 10.0001 2.05883 10.0001H6.82356C7.10438 10.0001 7.3737 9.88851 7.57227 9.68994C7.77084 9.49137 7.88239 9.22206 7.88239 8.94124V8.41182"
                                stroke="#CF0000"
                            />
                            <path
                                d="M7.35288 2.05889L8.94112 3.64713M9.67436 2.89801C9.88287 2.6895 10 2.4067 10 2.11183C10 1.81695 9.88287 1.53415 9.67436 1.32565C9.46585 1.11714 9.18305 1 8.88818 1C8.5933 1 8.31051 1.11714 8.102 1.32565L3.64697 5.76479V7.35303H5.23522L9.67436 2.89801Z"
                                stroke="#CF0000"
                            />
                        </svg>
                    </a>
                </div>

                <div className="flex flex-col items-end shrink-0">
                    <QuantityControl />
                    <PriceDisplay
                        originalPrice={originalPrice}
                        discountedPrice={discountedPrice}
                    />
                </div>
            </div>
            {isNotePopupOpen && (
                    <NotePopup onClose={handleCloseNotePopup} />
                )}
                {isProductDetailPopupOpen && (
                    <ProductDetailPopup
                        product={product}
                        onClose={handleCloseProductPopup}
                        onAddToCart={() => {
                            handleCloseProductPopup();
                        }}
                    />
                )}
        </>
    );
};

export default OrderItem;
