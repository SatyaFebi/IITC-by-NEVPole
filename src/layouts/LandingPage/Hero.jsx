const Hero = () => {
    return (
        <div className="flex flex-row xl:justify-start justify-center">
            <img
                src="./images/background.png"
                alt=""
                className="w-full absolute -z-20"
            />
            <div className="min-h-screen xl:text-left xl:justify-start justify-center text-center pl-[80px] sm:pt-[120px] pt-[60px]">
                <p className="text-primary font-bold text-lg">Kasirku #1</p>
                <h1 className="xl:text-[40px] text-[30px] mt-2 font-bold text-slate-800">
                    Bergabunglah dengan Kami
                </h1>
                <h2 className="font-bold xl:text-[30px] text-[25px] text-slate-800">
                    Ubah Kasirmu menjadi Kasir Digital
                </h2>

                <img
                    src="./images/Stabilo.svg"
                    alt="Gambar Stabilo"
                    className="relative sm:block hidden xl:left-0 left-24 -z-10 bottom-5 w-96"
                />

                <p className="mt-3 font-medium text-lg text-slate-800 max-w-[600px] mx-auto">
                    Kami adalah penyedia layanan online yang memudahkan usaha
                    UMKM dalam menerima pembayaran baik tunai maupun non-tunai.
                </p>

                <div className="mt-10 flex xl:justify-start justify-center flex-wrap items-center gap-x-4">
                    <button className="border border-transparent bg-red-700 rounded-3xl text-white inline-block py-3 px-5">
                        Daftar Sekarang
                    </button>
                    <a
                        href="#"
                        className="text-md font-medium underline text-slate-800 sm:ml-4 sm:mt-0 ml-0 mt-5"
                    >
                        Tentang Kasirku
                    </a>
                    <img
                        src="/icons/Arrow.svg"
                        alt="Panah"
                        className="xl:flex hidden right-0 mt-[-30px] ml-4"
                    />
                </div>
            </div>

            <div className="flex z-10 justify-start pl-14 pt-32">
                <div className="absolute xl:flex hidden flex-row bg-white rounded-lg p-3 pr-8 h-fit shadow-md">
                    <div className="rounded-full text-3xl p-1 h-12 text-center content-center font-medium text-white w-12 bg-yellow-300">
                        #1
                    </div>
                    <div className="ml-4 mt-2 flex flex-col">
                        <div className="text-black font-medium mb-1">
                            Penyedia Layanan Terbaik
                        </div>
                        <div className="text-gray-400 text-sm mb-1">
                            Jadi Gaperlu Ngantri Lagi Deh
                        </div>
                        <div className="flex flex-row">
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute -z-10 right-24 bottom-44 xl:flex hidden flex-col bg-white rounded-lg px-6 py-9 h-fit w-[400px] shadow-md">
                    <div className="text-black text-2xl font-medium mb-2">
                        Your Location
                    </div>
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

                <div className="absolute z-10 xl:flex hidden flex-row bg-white right-8 bottom-16 rounded-lg p-3 pr-8 h-fit shadow-md">
                    <div className="rounded-full text-3xl p-1 h-12 text-center content-center font-medium text-white w-12 bg-yellow-300">
                        #1
                    </div>
                    <div className="ml-4 mt-2 flex flex-col">
                        <div className="text-black font-medium mb-1">
                            Layanan Servicenya Bagus
                        </div>
                        <div className="text-gray-400 text-sm mb-1">
                            Keren sama csnya, fast respon bgt
                        </div>
                        <div className="flex flex-row">
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                            <img
                                src="./icons/Star.svg"
                                alt=""
                                className="w-8 h-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
