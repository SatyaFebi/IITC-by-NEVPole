const Footer = () => {
    return (
        <div className="min-h-[30vh] bg-black text-white py-10">
            <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-8 px-8">
                {/* Bagian Lokasi */}
                <div className="flex flex-col items-start w-full md:w-auto">
                    <h1 className="text-primary text-left font-bold text-2xl mb-5">
                        Kasir<span className="text-white">Ku.</span>
                    </h1>
                    <div className="flex items-start">
                        <img
                            src="/images/Footer/location.svg"
                            alt="Location"
                            className="h-9"
                        />
                        <div className="ml-4">
                            <h5 className="font-bold">Lokasi Kami :</h5>
                            <p className="font-normal">
                                SMKN 1 Cibinong, Karadenan, Cibinong, Kab.
                                Bogor, Jawa Barat
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                    <h1 className="font-bold text-lg mb-5">Hubungi Kami :</h1>
                    <p className="font-normal">Whatsapp : 081384249677</p>
                    <p className="font-normal">Telepon : 081384249677</p>
                </div>

                <div className="flex flex-col items-start md:items-end w-full md:w-auto">
                    <h1 className="font-bold text-lg mb-5">Kunjungi Kami :</h1>
                    <p className="font-normal">
                        Instagram :{" "}
                        <a
                            href="https://instagram.com/habib.yet"
                            className="text-primary font-semibold"
                        >
                            @Kasirku.id
                        </a>
                    </p>
                    <p className="font-normal">
                        Twitter / X :{" "}
                        <a
                            href="https://instagram.com/habib.yet"
                            className="text-primary font-semibold"
                        >
                            @Kasirku.id
                        </a>
                    </p>
                </div>
            </div>

            <hr className="m-auto w-[90%] border-slate-600 border-2 mt-8" />

            <div>
                <p className="text-center text-sm py-8 px-8 font-normal">
                    &copy; 2023 Kasirku | Website Kasirku adalah milik Tim
                    NevPole. yang mendaftar lomba IITC pada tahun 2024.
                </p>
            </div>
        </div>
    );
};

export default Footer;
