
import OrderItem from '../../components/MarketplaceComp/OrderItem';

const OrderList = () => {
    const orders = [
        {
            itemName: 'Ayam Bakar Iga',
            description: 'Styrofoam, Telur Rebus setengah matang',
            originalPrice: '20.000',
            discountedPrice: '0',
        },
        {
            itemName: 'Ayam Bakar Iga',
            description: 'Styrofoam, Telur Rebus setengah matang',
            originalPrice: '20.000',
            discountedPrice: '0',
        }
    ];

    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md">
            <h2 className="font-bold text-xl mb-4">DETAIL PESANAN ANDA</h2>
            {orders.map((order, index) => (
                <OrderItem 
                    key={index} 
                    itemName={order.itemName} 
                    description={order.description} 
                    originalPrice={order.originalPrice} 
                    discountedPrice={order.discountedPrice} 
                />
            ))}
        </div>
    );
};

export default OrderList;