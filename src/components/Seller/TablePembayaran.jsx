const TablePembayaran = ({data1, data2, data3, data4, color}) => {
  return (
    <div>
        <div className="border rounded-xl mt-10 p-5 items-center text-center">
            <table>
                    <thead>
                        <tr>
                            <th className="px-20">METODE</th>
                            <th className="px-20">FEE TRX</th>
                            <th className="px-20">PAYOUT</th>
                            <th className="px-20">ON/OFF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data1}</td>
                            <td>{data2}</td>
                            <td>{data3}</td>
                            <td>
                                <button className={`${color} rounded-xl text-white px-7 py-2`}>{data4}</button>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
    </div>
  )
}

export default TablePembayaran