import NavbarSeller from "../../components/Seller/NavbarSeller";
import FormDataPribadi from "../../components/Seller/FormDataPribadi";

const PengaturanAkun = () => {

  return (
    <div className="min-h-screen ">
      <div className="flex flex-1">
        <NavbarSeller /> 
        <div className="flex-1 p-6 overflow-y-auto pl-[280px]">
        <a href="/account">
        <img 
                src="/images/Seller/user.svg" 
                alt="User" 
                className="absolute top-5 right-5 w-8 h-8" 
              />
      </a>
          <h1 className="text-3xl font-bold">Warkop Babeh</h1>
          <p className="font-semibold">Location: SMKN 1 Cibinong</p>
          <FormDataPribadi />
        </div>
      </div>
    </div>
  );
}

export default PengaturanAkun;