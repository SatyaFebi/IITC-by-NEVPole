import paymentMethodImage from './images/payment-method.png';
import { useNavigate } from 'react-router-dom';

const OnlineAuthorization = () => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate('/order-status/cashier-expired');
    };

    const handleSuccess = () => {
        navigate('/order-status/success');
    };

    return (
        <div className="rounded-md w-full h-fit py-6 px-3 mt-2 shadow-md">
            <div className="flex items-center justify-center flex-col text-center w-full">
                <div className="w-48 h-48 bg-slate-200 rounded-lg mb-3"></div>
                <div className="font-bold text-md mb-3">
                    Total Tagihan{" "}
                    <span className="text-primary font-bold">Rp 63.800</span>
                </div>
                <div className="font-bold text-md mb-3">
                    Bayar Sebelum{" "}
                    <span className="text-primary font-bold">
                        25 Menit 10 Detik
                    </span>
                </div>
                <div className="font-medium text-xs mb-4">
                    Bayar Wajib Sesuai Dengan Total Tagihan Diatas
                    <br />
                    dan Bayar sebelum waktu diatas habis.
                    <br />
                    Jika waktu habis maka coba pesan ulang.
                    <br />
                    Terimakasih
                </div>
                <div className="font-medium text-xs mb-2">
                    Pembayaran didukung oleh :
                    <img src={paymentMethodImage} alt="Metode Pembayaran" className="mt-2" />
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <div 
                    onClick={handleCancel} 
                    className="bg-primary rounded-full w-fit px-3 text-white py-0.5 font-medium text-[10px] mb-3 cursor-pointer">
                    Cancel Order
                </div>
                <div 
                    onClick={handleSuccess} 
                    className="bg-green-500 rounded-full w-fit px-3 text-white py-0.5 font-medium text-[10px] mb-3 cursor-pointer ml-2">
                    Confirm Payment
                </div>
            </div>
        </div>
    );
};

export default OnlineAuthorization;
