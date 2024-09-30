import NavbarSeller from "../../components/Seller/NavbarSeller";
import AdminCard from "../../components/Seller/AdminCard";

const DashboardPenjual = () => {
  const orderData = [
    { id: '#1', payment: 'CASH', table: 'No. 27', orderId: '#12345678', price: 'Rp 50.000,00' },
    { id: '#2', payment: 'CASH', table: 'No. 28', orderId: '#12345679', price: 'Rp 60.000,00' },
    { id: '#3', payment: 'CASH', table: 'No. 29', orderId: '#12345680', price: 'Rp 70.000,00' },
    { id: '#4', payment: 'CASH', table: 'No. 30', orderId: '#12345681', price: 'Rp 80.000,00' },
    { id: '#5', payment: 'CASH', table: 'No. 31', orderId: '#12345682', price: 'Rp 90.000,00' },
  ];

  return (
    <div className="min-h-screen ">
      <div className="flex flex-1">
        <NavbarSeller /> 
        <div className="flex-1 p-6 overflow-y-auto pl-[280px]">
          <h1 className="text-3xl font-bold">Warkop Babeh</h1>
          <p className="font-semibold">Location: SMKN 1 Cibinong</p>
          <h5 className="font-bold text-2xl mt-5">Dashboard</h5>

          {/* Add card here */}
          <AdminCard>5 pesanan telah ditambahkan.</AdminCard>
          <div className="mt-8">
            <h1 className="font-bold text-2xl mb-5">Pesanan Masuk</h1>
            <div className="border rounded-2xl shadow-xl p-8">

              <table className="text-center w-full border-b-2 border-gray-350 text-sm">
                <thead>
                  <tr>
                    <th className="py-1 px-7 border-b-2 border-slate-500">ANTRIAN</th>
                    <th className="py-1 px-7 border-b-2 border-slate-500">PEMBAYARAN</th>
                    <th className="py-1 px-7 border-b-2 border-slate-500">MEJA</th>
                    <th className="py-1 px-7 border-b-2 border-slate-500">ORDER ID</th>
                    <th className="py-1 px-7 border-b-2 border-slate-500">HARGA</th>
                    <th className="py-1 px-7 border-b-2 border-slate-500">SIAP?</th>
                    <th className="py-1 px-7 border-b-2 border-slate-500">DETAIL ORDER</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.map((order, index) => (
                    <tr key={index}>
                      <td className="font-semibold py-3 border-b-2 border-slate-500">{order.id}</td>
                      <td className="font-semibold py-3 border-b-2 border-slate-500">{order.payment}</td>
                      <td className="py-3 border-b-2 border-slate-500">{order.table}</td>
                      <td className="py-3 border-b-2 border-slate-500">{order.orderId}</td>
                      <td className="py-3 border-b-2 border-slate-500">{order.price}</td>
                      <td className="border-b-2 border-slate-500">
                        <button className="bg-slate-900 px-5 text-white py-1 rounded">SIAP</button>
                      </td>
                      <td className="border-b-2 border-slate-500">
                        <a href="/seller" className="text-blue-800 font-semibold hover:underline">Klik Disini</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPenjual;