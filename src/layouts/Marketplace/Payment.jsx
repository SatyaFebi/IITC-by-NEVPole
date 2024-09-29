import { useState } from 'react';

const Payment = ({ onSelectPaymentMethod }) => {
    const [showOptions, setShowOptions] = useState(false);
    const [option, setOption] = useState(''); // Untuk tampilan
    const [payment, setPayment] = useState(''); // Untuk dikirim

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionSelect = (selectedOption) => {
        setOption(selectedOption); // Set pilihan yang ditampilkan

        // Tentukan payment berdasarkan selectedOption
        const paymentMethod = selectedOption === 'QRIS' ? 'qris' : 'cashier';
        setPayment(paymentMethod); // Set payment yang akan dikirim
        onSelectPaymentMethod(paymentMethod); // Update parent component's state dengan payment yang baru
        setShowOptions(false); // Menutup opsi setelah dipilih
    };

    return (
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md cursor-pointer">
            <div className="flex flex-row justify-between items-center py-1 px-5" onClick={handleToggleOptions}>
                <img src="./images/wallet.svg" className="w-8 h-8" alt="Dompet" />
                <p className="font-semibold text-left text-md text-black">
                    {option ? `Metode: ${option}` : 'Metode Pembayaran'} {/* Menampilkan opsi yang berbeda */}
                </p>
                <img 
                    src="./icons/Vector.svg" 
                    className={`w-2 h-3 transition-transform duration-300 ${showOptions ? 'rotate-90' : ''}`} 
                    alt="Icon" 
                />
            </div>

            {showOptions && (
                <div className="mt-3">
                    <ul className="w-full bg-white border border-gray-300 rounded-md">
                        <li 
                            className="p-2 hover:bg-gray-100 cursor-pointer font-bold flex flex-row text-sm"
                            onClick={() => handleOptionSelect('QRIS')} // Mengirim QRIS
                        >
                            <img src="./icons/qr-code.svg" alt="" className="mr-2 w-6 h-5" />
                            QRIS / PEMBAYARAN ONLINE
                        </li>
                        <li 
                            className="p-2 hover:bg-gray-100 cursor-pointer flex flex-row font-bold text-sm"
                            onClick={() => handleOptionSelect('Bayar Ke Kasir')} // Mengirim Bayar Ke Kasir
                        >
                            <img src="./icons/cashier.svg" alt="" className="mr-2 w-6 h-5" />
                            BAYAR KE KASIR
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Payment;
