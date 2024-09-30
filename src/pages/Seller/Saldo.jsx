import NavbarSeller from "../../components/Seller/NavbarSeller";
import AdminCard from "../../components/Seller/AdminCard";

const Saldo = () => {

  return (
    <div className="min-h-screen ">
      <div className="flex flex-1">
        <NavbarSeller /> 
        <div className="flex-1 p-6 overflow-y-auto pl-[280px]">
        <a href="/account">
        <img 
                src="/images/Seller/user.svg" 
                alt="User" 
                className="absolute top-5 right-5 w-8 h-8" 
              />
      </a>
          <h1 className="text-3xl font-bold">Warkop Babeh</h1>
          <p className="font-semibold">Location: SMKN 1 Cibinong</p>
          <h5 className="font-bold text-3xl mt-7">Balance</h5>
          <div className="mt-5 flex">
            <h5 className="text-lg font-semibold pb-2 border-b-4 border-slate-900 mr-8 ">Saldo Anda</h5>
            <h5 className="text-lg font-semibold">Informasi Bank Anda</h5>
          </div>
          <AdminCard>Kami dengan senang hati mengumumkan perubahan yang akan memberikan keuntungan lebih bagi Anda! Mulai hari ini, biaya administrasi pada aplikasi kami akan diturunkan dari 1% menjadi 0.7%</AdminCard>
          <div className="flex">
            <div className="w-[45%]">
                <div className="border-2 mt-7 py-4 px-4 rounded-lg shadow-lg">
                    <h5 className="font-semibold">Saldo yang dapat ditarik</h5>
                    <h1 className="text-3xl font-bold mt-2">Rp 250.000</h1>
                    <div className="flex mt-2 font-semibold">
                        <h5>Saldo Pending Rp 250.000</h5>
                        <img src="/images/Seller/Info.svg" alt="" className="ml-2"/>
                    </div>
                    <p className="text-sm text-slate-500">Minimal Penarikan Saldo Rp 10.000</p>
                    <div className="flex mt-10">
                        <button className="py-1 px-5 text-white font-semibold bg-red-600 rounded-2xl">Tarik Saldo</button>
                        <button className="py-1 px-5 font-bold border-2 border-black rounded-2xl ml-5">Info Saldo Kasirku</button>
                    </div>
                </div>
                <div className="border-2 mt-7 py-4 px-4 rounded-lg shadow-lg">
                    <h5 className="font-semibold">Total Seluruh Saldo Kasir Anda</h5>
                    <h1 className="text-3xl font-bold mt-2">Rp 2.250.000</h1>
                    <div className="flex mt-2">
                        <p className="text-sm text-slate-500">
                            Apa itu Saldo Kasir?
                        </p>
                        <img src="/images/Seller/Info.svg" alt="" className="ml-2"/>
                    </div>
                </div>
            </div>
            <div className="w-[55%]">
              <div className="border-2 mt-7 py-4 px-4 ml-5 rounded-lg shadow-lg">
                <h3 className="font-bold text-2xl">Informasi Pencairan Saldo</h3>
                <div className="font-semibold mt-3 px-3">
                  <p>1. Proses pencairan saldo 1-3 hari kerja untuk semua bank.</p>
                  <p>2. Pencairan saldo tidak dikenakan biaya untuk Penjual yang menggunakan Bank BCA, BRI, dan Mandiri.</p>
                  <p>3. Pencairan saldo akan dikenakan biaya Rp 6.500,- untuk Penjual yang menggunakan Bank selain BCA, BRI, dan Mandiri</p>
                  <p>4. Minimal pengajuan pencairan saldo toko yang dapat diproses adalah Rp 20.000,-</p>
                  <p>5. Maksimal pengajuan pencairan saldo toko yang dapat diproses pada akhir pekan dan hari libur nasional adalah Rp 250.000.000,- (Dua Ratus Lima Puluh Juta Rupiah) khusus pengguna Bank Central Asia (BCA), Rp 500.000.000,- (Lima Ratus Juta Rupiah), dan Rp 50.000.000,- (Lima Puluh Juta Rupiah) per pengajuan tergantung dari Bank pengguna. Lihat detail batas pengajuan masing-masing Bank <a href="#" className="underline">disini</a></p>
                  <p>6. Pencairan saldo di akhir pekan dan hari libur nasional yang melebihi ketentuan tersebut akan diproses pada hari kerja berikutnya.</p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Saldo;