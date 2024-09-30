const FormDataUsaha = () => {
    return (
      <div>
          <div className="border rounded-xl shadow-xl p-8 mt-10">
                  <h1 className="font-bold text-lg">DATA USAHA</h1>
                  <h5 className="text-sm font-bold">PEMILIK USAHA</h5>
                  <hr className="w-full border mt-4 border-slate-800"/>
                  <div className="flex flex-col mb-4">
                      <div className="flex items-center mt-4">
                          <h5 className="w-1/3">Nama Toko <span className="text-red-600">*</span> :</h5>
                          <input type="text" placeholder="Toko Ijo" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                      </div>
                      <div className="flex items-center mt-4">
                          <h5 className="w-1/3">Lokasi Toko <span className="text-red-600">*</span> :</h5>
                          <input type="number" placeholder="Jl. Kolonel Milan no. 3" className="border p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                      </div>
                      <div className="flex items-center mt-4">
                          <h5 className="w-1/3">Jam Buka - Tutup <span className="text-red-600">*</span> :</h5>
                          <input type="number" className="border p-2 rounded-lg w-12 ml-2 text-sm mr-1"/>
                          <p>&mdash; </p>
                          <input type="number" className="border p-2 rounded-lg w-12 ml-2 text-sm"/>
                      </div>
                      <div className="flex items-center mt-4">
                          <h5 className="w-1/3">Logo Toko <span className="text-red-600">*</span> :</h5>
                          <input type="file"  className="hidden p-2 rounded-lg w-2/3 ml-2 text-sm"/>
                      </div>
                      
                  </div>
              </div>
      </div>
    )
  }
  
  export default FormDataUsaha