import { useState } from "react";
import Coupon from "../../layouts/Marketplace/Coupon";
import FixedOrderTotal from "../../layouts/Marketplace/FixedOrderCheckout";
import MarketNameShort from "../../layouts/Marketplace/MarketNameShort";
import MarketplaceHeader from "../../layouts/Marketplace/MarketplaceHeader";
import OrderList from "../../layouts/Marketplace/OrderList";
import Payment from "../../layouts/Marketplace/Payment";
import TotalPrice from "../../layouts/Marketplace/TotalPrice";

const Confirmation = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

    const handleSelectPaymentMethod = (method) => {
        setSelectedPaymentMethod(method); // Memperbaiki penamaan fungsi
    };

    return (
        <div className="max-w-sm min-h-screen mx-auto overflow-x-hidden">
            <MarketplaceHeader />
            <div className="p-3 pb-32">
                <MarketNameShort />
                <FixedOrderTotal
                    selectedPaymentMethod={selectedPaymentMethod} // Mengirim prop yang benar
                />
                <OrderList />
                <Payment onSelectPaymentMethod={handleSelectPaymentMethod} /> {/* Menggunakan fungsi yang benar */}
                <Coupon />
                <TotalPrice />
            </div>
        </div>
    );
};

export default Confirmation;
