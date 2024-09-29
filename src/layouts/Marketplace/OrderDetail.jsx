const OrderDetail = ({ status }) => {
    let statusClass = "bg-yellow-400";
    let statusText = "PENDING";

    if (status === 'cashier' || status === 'qris') {
        statusClass = "bg-yellow-400";
        statusText = "MENUNGGU";
    } else if (status === 'success') {
        statusClass = "bg-green-500";
        statusText = "BERHASIL";
    } else if (status === 'qris-failed' || status === 'cashier-failed') {
        statusClass = "bg-red-500"; 
        statusText = "GAGAL";
    }

    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md">
            <h2 className="font-bold text-lg mb-1">Detail Pesanan</h2>
            <div className="flex flex-row">
                <h4 className="font-semibold text-sm mb-4">5 Items</h4>
                <div className="w-px h-6 bg-black mx-2"></div>
                <div className={`${statusClass} h-fit w-fit px-3 text-white py-1 font-bold text-[10px] mb-3`}>
                    {statusText}
                </div>
            </div>
            <div className="flex flex-col mb-3 border-b-2">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row justify-between">
                        <div className="flex justify-center text-center items-center text-white font-bold bg-red-500 p-3 w-11 h-11 mr-2 mb-2">
                            1
                        </div>
                        <div className="flex flex-col">
                            <div className="text-md font-bold">
                                2x Ayam Bakar Iga
                            </div>
                            <div className="text-xs text-red font-bold">
                                Rp. 250000
                            </div>
                        </div>
                    </div>
                    <div className="flex text-lg text-right text-red-500 font-bold items-center py-auto">
                        Rp. 250000
                    </div>
                </div>
                <div className="text-[12px] font-semibold">Add-on</div>
                <div className="text-[12px] font-semibold mb-2">
                    Styrofoam, Sambal, Gulai, Es Teh
                </div>
            </div>
        </div>
    );
};

export default OrderDetail;
