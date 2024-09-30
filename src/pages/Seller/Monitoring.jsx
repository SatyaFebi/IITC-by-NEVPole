import NavbarSeller from "../../components/Seller/NavbarSeller";
import MonitorSettings from "../../components/Seller/MonitorSettings";
import MonitorTable from "../../components/Seller/MonitorTable";

const Monitoring = () => {
    
  return (
    <div className="min-h-screen">
      <div className="flex flex-1">
        <NavbarSeller />
        <div className="flex-1 p-6 pl-[260px]">
          <h1 className="text-3xl font-bold">Warkop Babeh</h1>
          <p className="font-semibold">Location: SMKN 1 Cibinong</p>
          <hr className="border-b-2 border-gray-300 mt-2" />
          <div className="ml-7">
            <h1 className="font-bold text-xl mt-10 mb-8">Produk Saya</h1>
            <MonitorSettings />
            <MonitorTable />
            <MonitorTable />
            <MonitorTable />
            <MonitorTable />
            <MonitorTable />
            <MonitorTable />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitoring; 