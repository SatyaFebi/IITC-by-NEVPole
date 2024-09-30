import NavbarSeller from "../../components/Seller/NavbarSeller";

const StatistikPenjualan = () => {
  const datas = [
    { penjualan: 'Makanan', qty: '10' },
    { penjualan: 'Minuman', qty: '102' },
    { penjualan: 'Total Penjualan', qty: '112' },
    { penjualan: 'Uang Masuk', qty: 'Rp 250.000,00' },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-1">
        <NavbarSeller />
        <div className="flex-1 p-6 pl-[280px]"> {/* Menambahkan padding kiri yang sesuai */}
          <h1 className="text-3xl font-bold">Warkop Babeh, SMKN 1 Cibinong</h1>
          <p className="font-semibold">Location: -</p>
          <div className="mt-8">
            <h1 className="font-semibold text-xl">Data Total Keseluruhan Penjualan Per Hari</h1>
            <img src="images/Seller/Graph.svg" alt="" className="mt-10" />
            <div className="flex">
              <img src="images/Seller/Group.svg" alt="" className="mt-10" />
              <img src="images/Seller/Chart.svg" alt="" className="mt-10" />
            </div>
            <div className="mt-20">
              <h1 className="font-semibold text-xl">Data Detail Penjualan Per Hari</h1>
              <table className="text-center text-sm border-solid border-2 mt-5">
                <thead className="bg-[#f40224] text-white">
                  <tr>
                    <th className="px-5 py-3">PENJUALAN</th>
                    <th className="px-2 py-3">22 September 2024</th>
                    <th className="px-2 py-3">23 September 2024</th>
                    <th className="px-2 py-3">24 September 2024</th>
                    <th className="px-2 py-3">25 September 2024</th>
                    <th className="px-2 py-3">26 September 2024</th>
                    <th className="px-2 py-3">27 September 2024</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((data, index) => (
                    <tr key={index}>
                      <td className="py-2">{data.penjualan}</td>
                      <td>{data.qty}</td>
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

export default StatistikPenjualan;