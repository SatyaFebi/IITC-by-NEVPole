const Navbar = () => {
  return (
    <div>
        <nav className="bg-[#F4F4F4] border-b-2 flex min-h-[50px]">
            <a href="/" className="text-red-600 text-3xl font-bold mt-2 ml-6">Kasi<span className="text-black">rku.</span></a>
            <div className="flex items-center ml-[350px]">
                <div className="font-semibold">
                    <a href="" className=" py-4 px-4">Beranda</a>
                    <a href="" className=" py-4 px-4">Partnership</a>
                    <a href="" className=" py-4 px-4">Ketentuan</a>
                    <a href="" className=" py-4 px-4">Daftar</a>
                </div>
            </div>
            <a href="/" className="ml-[310px] flex border rounded-lg my-3 px-3 border-black">
            <div className="py-1 flex">
                <img src="/icons/globe.svg" alt="" />
                <p href="" className="ml-2 font-semibold">Bahasa</p>
            </div>
            </a>
        </nav>
    </div>
  )
}

export default Navbar