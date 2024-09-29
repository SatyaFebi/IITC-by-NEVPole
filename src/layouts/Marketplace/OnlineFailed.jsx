import invalidQr from "./images/qr-invalid.png";

const OnlineFailed = () => {
    return (
        <div className="rounded-md w-full h-fit py-6 px-3 mt-2 shadow-md">
            <div className="flex items-center justify-center flex-col text-center w-full">
                <img src={invalidQr} className="mt-2 mb-4"></img>
                <div className="font-extrabold text-xl mb-3">QR KADALUARSA</div>
                <div className="font-bold text-xs mb-5">
                    Kamu akan diarahkan ke link selanjutnya,
                    <br />
                    dan tunggu pesanan tiba.
                    <br />
                    Terimakasih
                </div>
            </div>
        </div>
    );
};

export default OnlineFailed;
