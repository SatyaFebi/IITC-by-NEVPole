const MonitorTable = () => {
    const datas = [
        {
            gambar: '',
            nama: 'Ayam Bakar Iga',
            harga: 'Rp 250.000',
            stok: '27',
            kategori: 'Makanan',
            topping: 'Klik disini',
            opsi: 'Klik disini'
        }
    ]
  return (
    <div>
        <div className="flex border-2 max-w-full mr-16 rounded-xl mt-5 shadow-md">
                <div className="text-center items-center ">
                    <table>
                        <thead>
                            <tr className="text-sm text-center">
                                <th className="py-5 px-6">Gambar</th>
                                <th className="py-5 px-6">Nama Produk</th>
                                <th className="py-5 px-6">Harga</th>
                                <th className="py-5 px-6 ">Stok</th>
                                <th className="py-5 px-6">Kategori</th>
                                <th className="py-5 px-6">Topping</th>
                                <th className="py-5 px-6">Opsi Tunggal</th>
                                <th className="py-5 px-6">EDIT</th>
                                <th className="py-5 px-6">HAPUS</th>
                            </tr>
                        </thead>
                        <hr className="w-full mx-auto border border-black"/>
                        <tbody>
                            {datas.map((data, index) => (

                            
                            <tr key={index} className="text-sm">
                                <td>
                                    {/* <img src="" alt=""  className="text-sm items-center border w-8 h-8"/> */}
                                </td>
                                <td className="pb-7">{data.nama}</td>
                                <td className="pb-7">{data.harga}</td>
                                <td className="pb-7">{data.stok}</td>
                                <td className="pb-7">{data.kategori}</td>
                                <td className="pb-7 underline">
                                  <a href="#">
                                    {data.topping}
                                  </a>
                                </td>
                                <td className="pb-7 underline">
                                  <a href="#">
                                    {data.opsi}
                                  </a>
                                </td>
                                <td className="pb-7">
                                  <button className="bg-red-600 py-2 px-4 rounded-lg text-white">EDIT</button>
                                </td>
                                <td className="pb-7">
                                  <button className="bg-slate-950 py-2 px-4 rounded-lg text-white">HAPUS</button>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
  )
}

export default MonitorTable