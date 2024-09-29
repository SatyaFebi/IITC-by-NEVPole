

const TotalPrice = () => {
    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md">
            <h2 className="text-md font-bold">Tagihan Anda</h2>
            <div className="w-full p-3 border-2 rounded-lg font-bold text-red-500 text-sm mt-3">
                <div className="flex justify-between">
                    <div className="">Total Pesanan</div>
                    <div className="">Rp.250.000</div>
                </div>
                <div className="flex justify-between">
                    <div className="">PPN 10%</div>
                    <div className="">Rp.250.000</div>
                </div>
                <div className="flex justify-between">
                    <div className="">Total Bayar</div>
                    <div className="">Rp.250.000</div>
                </div>
            </div>
        </div>
    );
};

export default TotalPrice;
