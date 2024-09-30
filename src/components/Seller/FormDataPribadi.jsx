const FormDataPribadi = () => {
  return (
    <div>
        <div className="border rounded-xl shadow-xl p-8 mt-10">
                <h1 className="font-bold text-lg">DATA PRIBADI</h1>
                <h5 className="text-sm font-bold">PEMILIK USAHA</h5>
                <hr className="w-full border mt-4 border-slate-800"/>
                <div className="flex flex-col mb-4">
                    <div className="flex items-center mt-4">
                        <h5 className="w-1/3">Nama Lengkap Pemilik <span className="text-red-600">*</span> :</h5>
                        <input type="text" placeholder="Satya Febi Nugroho" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                    </div>
                    <div className="flex items-center mt-4">
                        <h5 className="w-1/3">NIK Pemilik <span className="text-red-600">*</span> :</h5>
                        <input type="number" placeholder="327108242082" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                    </div>
                    <div className="flex items-center mt-4">
                        <h5 className="w-1/3">Tanggal Lahir <span className="text-red-600">*</span> :</h5>
                        <input type="text" placeholder="1 Januari 2007" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                    </div>
                    <div className="flex items-center mt-4">
                        <h5 className="w-1/3">Foto KTP <span className="text-red-600">*</span> :</h5>
                        <input type="file" className=" p-2 rounded-lg ml-2 text-sm"/>
                    </div>
                    <div className="flex items-center mt-4">
                        <h5 className="w-1/3">Email Pemilik <span className="text-red-600">*</span> :</h5>
                        <input type="text" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                    </div>
                    <div className="flex items-center mt-4">
                        <h5 className="w-1/3">Email Toko <span className="text-red-600">*</span> :</h5>
                        <input type="text" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                    </div>
                    <div className="flex items-center mt-4">
                        <h5 className="w-1/3">Nomor Telepon <span className="text-red-600">*</span> :</h5>
                        <input type="number" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                    </div>
                    <div className="flex items-center mt-4">
                        <h5 className="w-1/3">Alamat Toko <span className="text-red-600">*</span> :</h5>
                        <input type="text" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default FormDataPribadi