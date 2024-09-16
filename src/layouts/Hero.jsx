const Hero = () => {
  return (
    <div className="min-h-screen w-100 pl-[80px] pt-[120px] ">
        <p className="text-red-600 font-bold text-lg">Kasirku #1</p>
        <h1 className="text-[40px] mt-2 font-bold">Bergabunglah dengan Kami</h1>
        <h2 className="font-bold text-[30px]">Ubah Kasirmu menjadi Kasir Digital</h2>
        <p className="mt-6 font-medium text-lg">Kami adalah penyedia layanan secara online agar memudahkan <br />usaha UMKM, menerima pembayaran baik tunai dan non tunai.</p>
        <div className="mt-10">
            <button className="border border-transparent bg-red-700 rounded-3xl py-2 px-6  text-white">
                Daftar Sekarang
            </button>
            <a href="" className="ml-10 text-md font-medium underline">
                Tentang Kasirku
            </a>
        </div>
    </div>
  )
}

export default Hero