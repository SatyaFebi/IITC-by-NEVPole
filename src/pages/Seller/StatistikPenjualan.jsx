import NavbarSeller from "../../components/Seller/NavbarSeller";

const StatistikPenjualan = () => {
  const datas = [
    { penjualan: 'Makanan', qty: '10', qty2: '12', qty3: '17', qty4: '62', qty5: '15', qty6: '22' },
    { penjualan: 'Minuman', qty: '102', qty2: '12', qty3: '17', qty4: '62', qty5: '15', qty6: '22' },
    { penjualan: 'Total Penjualan', qty: '112', qty2: '12', qty3: '17', qty4: '62', qty5: '15', qty6: '22' },
    { penjualan: 'Uang Masuk', qty: 'Rp 250.000,00', qty2: 'Rp 350.000,00', qty3: 'Rp 310.000,00', qty4: 'Rp 120.000,00', qty5: 'Rp 920.000,00', qty6: 'Rp 540.000,00' },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex flex-1">
        <NavbarSeller />
        <div className="flex-1 p-6 pl-[280px]"> 
        <a href="/account">
        <img 
                src="/images/Seller/user.svg" 
                alt="User" 
                className="absolute top-5 right-5 w-8 h-8" 
              />
      </a>
          <h1 className="text-3xl font-bold">Warkop Babeh</h1>
          <p className="font-semibold">Location: SMKN 1 Cibinong</p>
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
                      <td>{data.qty2}</td>
                      <td>{data.qty3}</td>
                      <td>{data.qty4}</td>
                      <td>{data.qty5}</td>
                      <td>{data.qty6}</td>
                      
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