import OrderItem from './OrderItem';

const OrderList = () => {
    const orders = [
        {
            itemName: 'Ayam Bakar Iga',
            description: 'Toping 1, Toping 2',
            originalPrice: '32.000',
            discountedPrice: '25.000',
        },
        {
            itemName: 'Ayam Penyet',
            description: 'Toping 1, Toping 2',
            originalPrice: '33.000',
            discountedPrice: '25.000',
        },
        {
            itemName: 'Teh Manis',
            description: 'Toping 1, Toping 2',
            originalPrice: '7.000',
            discountedPrice: '3.000',
        },
        {
            itemName: 'Kopi Susu',
            description: 'Toping 1, Toping 2',
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
