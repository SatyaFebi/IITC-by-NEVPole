import { useNavigate } from 'react-router-dom';

const CashierAuthorization = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/order-status/cashier-expired');
    };

    const handleSuccess = () => {
        navigate('/order-status/success');
    };

    return (
        <div className="rounded-md w-full h-fit py-6 px-3 mt-2 shadow-md">
            <h2 className="font-bold text-lg mb-2">KODE OTORISASI</h2>
            <div className="bg-yellow-400 w-fit px-3 text-white py-0.5 font-bold text-xs mb-3">
                PENDING
            </div>
            <div className="text-center w-full">
                <div className="text-2xl my-5 font-extrabold text-red-500">
                    0 R 2 B J K 2 S
                </div>
                <div className="font-semibold text-sm mb-3">
                    *Tunjukan kode ini ke kasir lalu bayar <br /> sesuai Nominal
                    di tagihan anda
                </div>

                <div className="font-bold text-md mb-3">
                    Bayar Sebelum{" "}
                    <span className="text-primary font-bold">
                        25 Menit 10 Detik
                    </span>
                </div>
                <div className="font-medium text-xs mb-2">
                    Bayar Wajib Sesuai Dengan Total Tagihan Diatas
                    <br />
                    dan Bayar sebelum waktu diatas habis.
                    <br />
                    Jika waktu habis maka coba pesan ulang.
                    <br />
                    Terimakasih
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <div 
                    className="bg-primary rounded-full w-fit px-3 text-white py-0.5 font-medium text-[10px] mb-3 cursor-pointer"
                    onClick={handleCancel}>
                    Cancel Order
                </div>
                <div 
                    className="bg-green-500 rounded-full w-fit px-3 text-white py-0.5 font-medium text-[10px] mb-3 cursor-pointer ml-2"
                    onClick={handleSuccess}>
                    Confirm Payment
                </div>
            </div>
        </div>
    );
};

export default CashierAuthorization;
