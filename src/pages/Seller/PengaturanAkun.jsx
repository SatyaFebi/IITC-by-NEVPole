import NavbarSeller from "../../components/Seller/NavbarSeller";

const PengaturanAkun = () => {

  return (
    <div className="min-h-screen ">
      <div className="flex flex-1">
        <NavbarSeller /> 
        <div className="flex-1 p-6 overflow-y-auto pl-[280px]">
          <h1 className="text-3xl font-bold">Warkop Babeh, SMKN 1 Cibinong</h1>
          <p className="font-semibold">Location: -</p>
            
            <div className="border rounded-xl shadow-xl p-8 mt-10">
                <h1>DATA PRIBADI</h1>
                <h5 className="text-sm">PEMILIK USAHA</h5>
                <hr className="w-full border-2 mt-4"/>
                <div className="flex">
                    <h5>Nama Lengkap Pemilik <span>*</span> : </h5>
                    <input type="text" placeholder="Satya Febi Nugroho"/>
                </div>
                <div className="flex">
                    <h5>NIK Pemilik <span>*</span> : </h5>
                    <input type="number" placeholder="327108242082"/>
                </div>
                <div className="flex">
                    <h5>Tanggal Lahir <span>*</span> : </h5>
                    <input type="text" placeholder="1 Januari 2007"/>
                </div>
                <div className="flex">
                    <h5>Foto KTP <span>*</span> : </h5>
                    <input type="text" placeholder="satyafebin@gmail.com"/>
                </div>
                <div className="flex">
                    <h5>Email Pemilik <span>*</span> : </h5>
                    <input type="text" placeholder=""/>
                </div>
                <div className="flex">
                    <h5>Email Toko <span>*</span> : </h5>
                    <input type="text" placeholder=""/>
                </div>
                <div className="flex">
                    <h5>Nomor Telepon <span>*</span> : </h5>
                    <input type="number" placeholder=""/>
                </div>
                <div className="flex">
                    <h5>Alamat Toko <span>*</span> : </h5>
                    <input type="text" placeholder=""/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default PengaturanAkun;