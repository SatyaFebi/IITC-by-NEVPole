const Hero = () => {
  return (
    <div className="flex flex-row justify-start">
      <img src="./images/background.png" alt="" className="w-full absolute -z-20"/>
      <div className="min-h-screen pl-[80px] pt-[120px]">
        <p className="text-red-600 font-bold text-lg">Kasirku #1</p>
        <h1 className="text-[40px] mt-2 font-bold text-slate-800">Bergabunglah dengan Kami</h1>
        <h2 className="font-bold text-[30px] text-slate-800">Ubah Kasirmu menjadi Kasir Digital</h2>
        <img
          src="./images/Stabilo.svg"
          alt=""
          className="relative -z-10 bottom-5 w-96"
        />
        <p className="mt-3 font-medium text-lg text-slate-800">
          Kami adalah penyedia layanan secara online agar memudahkan <br />
          usaha UMKM, menerima pembayaran baik tunai dan non tunai.
        </p>
        <div className="mt-10 flex items-center gap-x-4">
          <button className="border border-transparent bg-red-700 rounded-3xl text-white inline-block py-3 px-5">
            Daftar Sekarang
          </button>
          <a href="#" className="ml-[50px] text-md font-medium underline text-slate-800">
            Tentang Kasirku
          </a>
          <img src="/icons/Arrow.svg" alt="" className="mt-[-30px] ml-4" />
        </div>
      </div>

      <div className="flex z-10 justify-start pl-14 pt-32">
        <div className="absolute flex flex-row bg-white rounded-lg p-3 pr-8 h-fit shadow-md">
          <div className="rounded-full text-3xl p-1 h-12 text-center content-center font-medium text-white w-12 bg-yellow-300">
            #1
          </div>
          <div className="ml-4 mt-2 flex flex-col">
            <div className="text-black font-medium mb-1">Penyedia Layanan Terbaik</div>
            <div className="text-gray-400 text-sm mb-1">Jadi Gaperlu Ngantri Lagi Deh</div>
            <div className="flex flex-row">
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="absolute -z-10 right-40 bottom-44 flex flex-col bg-white rounded-lg px-6 py-10 h-fit w-[460px] shadow-md">
          <div className="text-black text-2xl font-medium mb-2">Your Location</div>
          <div className="flex flex-row mt-4">
            <input
              type="text"
              placeholder="Enter Your Location"
              className="border p-2 rounded-md items-center content-center mr-2 w-full"
            />
            <button className="bg-yellow-400 py-2 px-4 rounded-full font-bold">
              ENTER
            </button>
          </div>
        </div>

        <div className="absolute z-10 flex flex-row bg-white right-8 bottom-16 rounded-lg p-3 pr-8 h-fit shadow-md">
          <div className="rounded-full text-3xl p-1 h-12 text-center content-center font-medium text-white w-12 bg-yellow-300">
            #1
          </div>
          <div className="ml-4 mt-2 flex flex-col">
            <div className="text-black font-medium mb-1">Layanan Servicenya Bagus</div>
            <div className="text-gray-400 text-sm mb-1">Keren sama csnya, fast respon bgt</div>
            <div className="flex flex-row">
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
              <img src="./icons/Star.svg" alt="" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
