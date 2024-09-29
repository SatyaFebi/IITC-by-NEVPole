import { useState } from 'react';

const Payment = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowOptions(false); // menutup opsi setelah dipilih
  };

  return (
    <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md cursor-pointer">
      <div className="flex flex-row justify-between items-center py-1 px-5" onClick={handleToggleOptions}>
        <img src="./images/wallet.png" className="w-8 h-8" alt="Dompet" />
        <p className="font-semibold text-left text-md text-black">
          {selectedOption ? `Metode: ${selectedOption}` : 'Metode Pembayaran'}
        </p>
        <img 
          src="./icons/Vector.png" 
          className={`w-2 h-3 transition-transform duration-300 ${showOptions ? 'rotate-90' : ''}`} 
          alt="Icon" 
        />
      </div>

      {showOptions && (
        <div className="mt-3">
          <ul className="w-full bg-white border border-gray-300 rounded-md">
            <li 
              className="p-2 hover:bg-gray-100 cursor-pointer font-bold flex flex-row text-sm"
              onClick={() => handleOptionSelect('Qris')}
            >
              <img src="./icons/qr-code.svg" alt="" className="mr-2 w-6 h-5" />
              QRIS / PEMBAYARAN ONLINE
            </li>
            <li 
              className="p-2 hover:bg-gray-100 cursor-pointer flex flex-row font-bold text-sm"
              onClick={() => handleOptionSelect('Bayar Ke Kasir')}
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
