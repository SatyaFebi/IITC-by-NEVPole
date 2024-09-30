const Choose = () => {
  return (
    <div className="min-h-screen mt-[130px]">
        <h1 className="text-center text-4xl font-bold ">Kenapa Harus <span className="text-primary">Kami</span>?</h1>
        <img
          src="./images/Stabilo.svg"
          alt=""
          className="relative -z-10 w-[120px] mb-16 bottom-4 left-[620px]"
        />
        <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center md:px-14 px-4">
            <div className="mt-14 block md:w-[60%] w-full">
                <div className="mb-10 flex ml-10">
                    <img src="./images/Thumbsup.svg" alt="" />
                    <p className="ml-5 font-medium text-lg"><span className="font-bold">Proses Transaksi Lebih Cepat : </span>Dengan sistem kasir online kami, proses transaksi menjadi lebih cepat dan akurat, sehingga mengurangi waktu tunggu pelanggan.</p>
                </div>

                <div className="mb-10 flex ml-10">
                    <img src="./images/Question.svg" alt="" />
                    <p className="ml-5 font-medium text-lg"><span className="font-bold">Pengelolaan Pesanan yang Efektif : </span>Pemilik usaha dapat dengan mudah memantau dan mengelola semua pesanan yang masuk melalui dashboard yang user-friendly.</p>
                </div>

                <div className="mb-10 flex ml-10">
                    <img src="./images/Star.svg" alt="" />
                    <p className="ml-5 font-medium text-lg"><span className="font-bold">Laporan Penjualan Detail : </span>Dapatkan laporan penjualan secara real-time dan historis untuk membantu menganalisis kinerja bisnis dan membuat keputusan yang lebih baik.</p>
                </div>
            </div>
            <div className="ml-8">
                <img src="./images/image 12.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Choose