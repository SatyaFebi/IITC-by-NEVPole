const Footer = () => {
  return (
    <div className="min-h-[30vh] bg-black text-white">
        <div className="flex gap-20">
            <div className="ml-16 mt-6">
                <h1 className="text-red-600 font-bold text-2xl mb-5">Kasir<span className="text-white">Ku.</span></h1>
                <div className="flex">
                    <img src="/images/Footer/location.svg" alt="" className="h-9"/>
                    <div className="ml-4">
                        <h5>Lokasi Kami :</h5>
                        <p>SMKN 1 Cibinong, Karadenan, Cibinong, Kab. Bogor, Jawa Barat</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h1 className="font-bold text-lg mb-5">Hubungi Kami :</h1>
                <p className="font-semibold">Whatsapp : 089639151016</p>
                <p className="font-semibold">Telepon : 089639151016</p>
            </div>
            <div className="mt-6">
                <h1 className="font-bold text-lg mb-5">Kunjungi Kami :</h1>
                <p className="font-semibold">Instagram : 
                    <a href="https://instagram.com/satyafbi">
                        @Kasirku.id
                    </a>
                </p>
                <p className="font-semibold">Twitter / X : 
                    <a href="https://instagram.com/satyafbi">
                        @Kasirku.id
                    </a>
                </p>
            </div>
        </div>
        <hr className="m-auto w-[90%] border-slate-600 border-2 mt-8"/>
        <div>
            <p className="text-center text-sm py-5">@ 2023 Kasirku | Kasirku adalah merek milik PT BosMuda Tbk. yang terdaftar pada Direktorat Jenderal Kekayaan Intelektual Republik Indonesia.</p>
        </div>
    </div>
  )
}

export default Footer