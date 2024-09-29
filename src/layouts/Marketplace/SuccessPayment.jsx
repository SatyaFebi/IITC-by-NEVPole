
import Success from "./images/success.png";

const SuccessPayment = () => {
  return (
    <div className="rounded-md w-full h-fit py-6 px-3 mt-2 shadow-md">
            <div className="flex items-center justify-center flex-col text-center w-full">
                <img src={Success} className="mt-2 mb-5"></img>
                <div className="font-extrabold text-xl mb-3">PEMBAYARAN BERHASIL</div>
                <div className="font-bold text-xs mb-4">
                    Kamu akan diarahkan ke link selanjutnya,
                    <br />
                    dan tunggu pesanan tiba.
                    <br />
                    Terimakasih
                </div>
            </div>
        </div>
  )
}

export default SuccessPayment