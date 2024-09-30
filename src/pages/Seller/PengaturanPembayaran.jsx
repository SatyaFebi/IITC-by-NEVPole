import NavbarSeller from "../../components/Seller/NavbarSeller";
import AdminCard from "../../components/Seller/AdminCard";
import TablePembayaran from "../../components/Seller/TablePembayaran";

const PengaturanPembayaran = () => {

  return (
    <div className="min-h-screen ">
      <div className="flex flex-1">
        <NavbarSeller /> 
        <div className="flex-1 p-6 overflow-y-auto pl-[280px]">
          <h1 className="text-3xl font-bold">Warkop Babeh</h1>
          <p className="font-semibold">Location: SMKN 1 Cibinong</p>
          <h5 className="font-bold text-3xl mt-7">Balance</h5>
          <div className="mt-5 flex">
            <h5 className="text-lg font-semibold">Saldo Anda</h5>
            <h5 className="text-lg font-semibold pb-2 border-b-4 border-slate-900 ml-8 ">Informasi Bank Anda</h5>
          </div>
          <AdminCard>Kami dengan senang hati mengumumkan perubahan yang akan memberikan keuntungan lebih bagi Anda! Mulai hari ini, biaya administrasi pada aplikasi kami akan diturunkan dari 1% menjadi 0.7%</AdminCard>
          
            <TablePembayaran data1={'QRIS'} data2={'0.7%'} data3={'24 H'} data4={'ON'} color={'bg-green-600'}/>

            <TablePembayaran data1={'TUNAI'} data2={'0.2%'} data3={'-'} data4={'OFF'} color={'bg-red-600'}/>

            
          
        
            
        </div>
      </div>
    </div>
  );
}

export default PengaturanPembayaran;