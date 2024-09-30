const NavbarSeller = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#f40224] to-[#8e0115] w-[240px] font-semibold text-white min-h-[120vh] fixed text-sm">
        <nav className="flex flex-col">
          <h1 className="text-center mt-8 mb-7 font-bold text-2xl">
            <a href="/seller">Kasirku.</a> 
          </h1>
          <a href="/seller" className="p-4 hover:bg-slate-900">Dashboard</a>
          <a href="/stat" className="p-4 hover:bg-slate-900">Statistik Penjualan</a>
          <a href="/monitoring" className="p-4 hover:bg-slate-900">Monitoring Produk</a>
          <a href="/invoice" className="p-4 hover:bg-slate-900">Invoice Penjualan</a>
          <a href="/account" className="p-4 hover:bg-slate-900">Pengaturan Akun</a>
          <a href="/payment" className="p-4 hover:bg-slate-900">Withdraw</a>
          <a href="/paymentsettings" className="p-4 hover:bg-slate-900">Pengaturan Pembayaran</a>
        </nav>
      </div>
    </div>
  )
}

export default NavbarSeller