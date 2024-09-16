const Hero = () => {
  return (
    <div className="min-h-screen w-100 pl-[80px] pt-[120px] ">
        <p className="text-red-600 font-bold text-lg">Kasirku #1</p>
        <h1 className="text-[40px] mt-2 font-bold">Bergabunglah dengan Kami</h1>
        <h2 className="font-bold text-[30px]">Ubah Kasirmu menjadi Kasir Digital</h2>
        <p className="mt-6 font-medium text-lg">Kami adalah penyedia layanan secara online agar memudahkan <br />usaha UMKM, menerima pembayaran baik tunai dan non tunai.</p>
        <div className="mt-10 flex items-center gap-x-4">
            <button className="border border-transparent bg-red-700 rounded-3xl text-white inline-block py-3 px-5">
                Daftar Sekarang
            </button>
            <a href="#" className="ml-[50px] text-md font-medium underline">
                Tentang Kasirku
            </a>
            <img src="/icons/Arrow.svg" alt="" className="mt-[-30px] ml-4"/>
        </div>
    </div>
  )
}

export default Hero