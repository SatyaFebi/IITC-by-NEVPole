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
              <img src="/images/Footer/location.svg" alt="Location" className="h-9" />
              <div className="ml-4">
                <h5 className="font-bold">Lokasi Kami :</h5>
                <p className="font-normal">
                  SMKN 1 Cibinong, Karadenan, Cibinong, Kab. Bogor, Jawa Barat
                </p>
              </div>
            </div>
          </div>
  
          {/* Bagian Kontak */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <h1 className="font-bold text-lg mb-5">Hubungi Kami :</h1>
            <p className="font-normal">Whatsapp : 089639151016</p>
            <p className="font-normal">Telepon : 089639151016</p>
          </div>
  
          {/* Bagian Media Sosial */}
          <div className="flex flex-col items-start md:items-end w-full md:w-auto">
            <h1 className="font-bold text-lg mb-5">Kunjungi Kami :</h1>
            <p className="font-normal">
              Instagram :{" "}
              <a href="https://instagram.com/satyafbi" className="text-primary font-semibold">
                @Kasirku.id
              </a>
            </p>
            <p className="font-normal">
              Twitter / X :{" "}
              <a href="https://instagram.com/satyafbi" className="text-primary font-semibold">
                @Kasirku.id
              </a>
            </p>
          </div>
        </div>
  
        <hr className="m-auto w-[90%] border-slate-600 border-2 mt-8" />
        
        <div>
          <p className="text-center text-sm py-5 font-normal">
            @ 2023 Kasirku | Kasirku adalah merek milik PT BosMuda Tbk. yang terdaftar pada Direktorat Jenderal Kekayaan Intelektual Republik Indonesia.
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  