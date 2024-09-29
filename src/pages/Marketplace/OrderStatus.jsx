import { useParams } from "react-router-dom";
import MarketNameShort from "../../layouts/Marketplace/MarketNameShort";
import MarketplaceHeader from "../../layouts/Marketplace/MarketplaceHeader";
import OrderDetail from "../../layouts/Marketplace/OrderDetail";
import TotalPrice from "../../layouts/Marketplace/TotalPrice";
import CashierAuthorization from "../../layouts/Marketplace/CashierAuthorization";
import OnlineAuthorization from "../../layouts/Marketplace/OnlineAuthorization"; 
import OnlineFailed from "../../layouts/Marketplace/OnlineFailed";
import CashierFailed from "../../layouts/Marketplace/CashierFailed";
import SuccessPayment from "../../layouts/Marketplace/SuccessPayment";

const OrderStatus = () => {
    const { status } = useParams(); 

    return (
        <div className="max-w-sm min-h-screen mx-auto overflow-x-hidden">
            <MarketplaceHeader />
            <MarketNameShort />
            <div className="p-1 pb-32">
                {status === 'cashier' ? (
                    <CashierAuthorization />
                ) : status === 'qris' ? ( 
                    <OnlineAuthorization />
                ) : status === 'qris-expired' ? ( 
                    <OnlineFailed />
                ) : status === 'cashier-expired' ? ( 
                    <CashierFailed />
                ) : status === 'success' ? ( 
                    <SuccessPayment />
                ) : (
                    <div className=""></div>
                )}
                <TotalPrice />
                <OrderDetail status={status} />
            </div>
        </div>
    );
};

export default OrderStatus;
