const CashierFailed = () => {
    return (
        <div className="rounded-md w-full h-fit py-6 px-3 mt-2 shadow-md">
            <h2 className="font-bold text-lg mb-2">KODE OTORISASI</h2>
            <div className="bg-primary w-fit px-3 text-white py-0.5 font-bold text-xs mb-3">
                GAGAL
            </div>
            <div className="text-center w-full">
                <div className="text-2xl my-5 font-extrabold text-red-500">
                    XXXXXXXXXX
                </div>
                <div className="font-medium text-sm mb-3">
                    Kode Kadaluarsa Silakan Kembali ke<br/>Menu Utama dan pesan kembali
                </div>

                <div className="font-bold text-md mb-3">
                    Bayar Sebelum{" "}
                    <span className="text-primary font-bold">
                        KODE KADALUARSA
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
        </div>
    );
};

export default CashierFailed;
