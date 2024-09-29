const OrderDetail = ({ status }) => {
    let statusClass = "bg-yellow-400";
    let statusText = "PENDING";

    if (status === 'cashier' || status === 'qris') {
        statusClass = "bg-yellow-400";
        statusText = "MENUNGGU";
    } else if (status === 'success') {
        statusClass = "bg-green-500";
        statusText = "BERHASIL";
    } else if (status === 'qris-expired' || status === 'cashier-expired') {
        statusClass = "bg-secondary"; 
        statusText = "GAGAL";
    }

    const items = [
        { quantity: 1, itemName: 'Ayam Bakar Iga', description: 'Makanan', discountedPrice: 25000, originalPrice: 32000 },
        { quantity: 1, itemName: 'Ayam Penyet', description: 'Makanan', discountedPrice: 25000, originalPrice: 33000 },
        { quantity: 1, itemName: 'Teh Manis', description: 'Minuman', discountedPrice: 3000, originalPrice: 7000 },
        { quantity: 1, itemName: 'Kopi Susu', description: 'Minuman', discountedPrice: 5000, originalPrice: 8000 },
    ];

    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md">
            <h2 className="font-bold text-lg mb-1">Detail Pesanan</h2>
            <div className="flex flex-row">
                <h4 className="font-semibold text-sm mb-4">{items.length} Items</h4>
                <div className="w-px h-6 bg-black mx-2"></div>
                <div className={`${statusClass} h-fit w-fit px-3 text-white py-1 font-bold text-[10px] mb-3`}>
                    {statusText}
                </div>
            </div>
            <div className="flex flex-col mb-3 border-b-2">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-row justify-between w-full mb-4">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex justify-center text-center items-center text-white font-bold bg-secondary p-3 w-12 h-12 mr-2">
                                {item.quantity}
                            </div>
                            <div className="flex flex-col">
                                <div className="text-md font-bold">
                                    {item.quantity}x {item.itemName}
                                </div>
                                <div className="text-xs text-gray-600 leading-tight mr-2">
                                    {item.description}
                                </div>
                                <div className="text-xs text-red font-bold">
                                    Rp. {item.discountedPrice.toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <div className="flex text-lg text-right text-red-500 font-bold items-center py-auto">
                            Rp. {item.discountedPrice.toLocaleString()}
                        </div>
                    </div>
                ))}
                <div className="text-[12px] font-semibold">Add-on</div>
                <div className="text-[12px] font-semibold mb-2">
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
