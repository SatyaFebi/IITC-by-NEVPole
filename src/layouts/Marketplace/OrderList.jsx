import OrderItem from './OrderItem';

const OrderList = () => {
    const orders = [
        {
            itemName: 'Ayam Bakar Iga',
            description: 'Makanan',
            originalPrice: '32.000',
            discountedPrice: '25.000',
        },
        {
            itemName: 'Ayam Penyet',
            description: 'Makanan',
            originalPrice: '33.000',
            discountedPrice: '25.000',
        },
        {
            itemName: 'Teh Manis',
            description: 'Minuman',
            originalPrice: '3.000',
            discountedPrice: '7.000',
        },
        {
            itemName: 'Kopi Susu',
            description: 'Minuman',
            originalPrice: '8.000',
            discountedPrice: '5.000',
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
