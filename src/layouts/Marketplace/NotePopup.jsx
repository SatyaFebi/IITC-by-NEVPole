import { useEffect, useState } from 'react';

const NotePopup = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        // Setelah animasi selesai, panggil onClose
        setTimeout(() => {
            onClose();
        }, 200); // Sesuaikan dengan durasi animasi
    };

    return (
        <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50`}>
            {/* Menggunakan kelas animasi untuk popup */}
            <div className={`bg-white rounded-t-3xl p-5 w-11/12 max-w-sm bottom-0 md:w-1/3 absolute ${isClosing ? 'animate-slide-down' : 'animate-slide-up'} shadow-lg`}>
                {/* Close Button */}
                <button 
                    className="absolute top-3 right-3 text-red-500 font-bold text-xl hover:text-red-700 transition duration-200" 
                    onClick={handleClose} // Mengganti onClose dengan handleClose
                >
                    ✖
                </button>

                <h2 className="text-lg font-bold mb-3">Catatan</h2>
                <textarea
                    placeholder="Tulis catatan di sini..."
                    className="w-full h-32 border rounded-lg p-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition duration-200"
                ></textarea>

                {/* Total Section & Save Button */}
                <div className="flex items-center justify-between mt-4 border-t pt-4">
                    <button 
                        className="bg-secondary text-white font-semibold px-4 py-2 w-full rounded-lg hover:bg-opacity-80 transition duration-200" 
                        onClick={handleClose} // Ganti dengan fungsi yang sesuai untuk menyimpan catatan
                    >
                        SIMPAN CATATAN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotePopup;
