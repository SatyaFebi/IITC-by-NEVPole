const MonitorSettings = () => {
  return (
    <div>
        <div className="flex flex-wrap max-w-full border-2 mt-5 px-4 py-4 mr-16 rounded-xl items-center text-sm">
                <button className="bg-red-600 text-white rounded-xl py-1 px-3 font-semibold">Tambah Produk</button>
                <input type="search" className="mx-3 border py-1 px-3 pr-16 text-slate-600 border-black rounded-xl focus:outline-none" placeholder="Cari Produk" />
                <button className="mr-3 border py-1 px-3 pr-16 text-slate-600 border-black rounded-xl focus:outline-none">Pilih Kategori</button>
                <button className="mr-3 border py-1 px-3 font-semibold  border-black rounded-xl focus:outline-none">Habis</button>
                <button className="mr-3 border py-1 px-3 text-slate-600 border-black rounded-xl focus:outline-none">Hampir Habis</button>
                <button className="mt-2 mr-3 border py-1 px-3 pr-16 text-slate-600 border-black rounded-xl focus:outline-none">Urutkan dari</button>
                <p className="font-semibold">Stok : </p>
                <button className="ml-3 mt-2 mr-3 border py-1 px-3 pr-16 text-slate-600 border-black rounded-xl focus:outline-none">Min</button>
                <p>&mdash;</p>
                <button className="ml-3 mt-2 mr-3 border py-1 px-3 pr-16 text-slate-600 border-black rounded-xl focus:outline-none">Max</button>
                <button className="bg-red-600 text-white rounded-xl py-1 px-3 mt-2 font-semibold">Filter</button>
                <button type="reset" className="ml-3 mt-2 mr-3 border py-1 px-3 font-semibold border-black rounded-xl focus:outline-none">Reset</button>
            </div>
    </div>
  )
}

export default MonitorSettings