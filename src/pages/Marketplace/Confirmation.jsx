import Coupon from "../../layouts/Marketplace/Coupon";
import FixedOrderTotal from "../../layouts/Marketplace/FixedOrderTotal";
import MarketName from "../../layouts/Marketplace/MarketName";
import MarketplaceHeader from "../../layouts/Marketplace/MarketplaceHeader";
import OrderList from "../../layouts/Marketplace/OrderList";
import Payment from "../../layouts/Marketplace/Payment";
import TotalPrice from "../../layouts/Marketplace/TotalPrice";

const Confirmation = () => {
    return (
        <div className="max-w-sm min-h-screen mx-auto overflow-x-hidden">
            <MarketplaceHeader />
            <div className="p-3 pb-32">
                <MarketName />
                <OrderList />
                <Payment/>
                <Coupon/>
                <TotalPrice/>
            </div>
            <FixedOrderTotal />
        </div>
    );
};

export default Confirmation;
