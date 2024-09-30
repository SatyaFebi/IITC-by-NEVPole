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
        setSelectedPaymentMethod(method); 
    };

    return (
        <div className="max-w-sm min-h-screen mx-auto overflow-x-hidden">
            <MarketplaceHeader />
            <div className="p-3 pb-32">
                <MarketNameShort />
                <FixedOrderTotal
                    selectedPaymentMethod={selectedPaymentMethod} 
                />
                <OrderList />
                <Payment onSelectPaymentMethod={handleSelectPaymentMethod} /> 
                <Coupon />
                <TotalPrice />
            </div>
        </div>
    );
};

export default Confirmation;
