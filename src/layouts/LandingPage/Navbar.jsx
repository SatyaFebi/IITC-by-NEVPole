import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <nav className="bg-[#F4F4F4] border-b-2 flex justify-between items-center min-h-[50px] px-6 sticky top-0 z-50">
        <a href="/" className="text-primary text-3xl font-bold mt-2">
          Kasi<span className="text-black">rku.</span>
        </a>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="text-3xl xl:hidden block focus:outline-none"
        >
          &#9776;
        </button>

        <div className="hidden xl:flex items-center space-x-4 font-semibold">
          <a href="/#beranda" className="py-4 px-4">Beranda</a>
          <a href="/#peningkatan" className="py-4 px-4">Peningkatan</a>
          <a href="/#mengapa" className="py-4 px-4">Mengapa Kami?</a>
          <a href="/#ketentuan" className="py-4 px-4">Ketentuan</a>
          <a href="/#daftar" className="py-4 px-4">Daftar</a>
        </div>

        <a href="/" className="hidden xl:flex border rounded-lg py-2 px-3 border-black items-center">
          <img src="/icons/globe.svg" alt="Globe" className="w-4 h-4" />
          <p className="ml-2 font-semibold">Bahasa</p>
        </a>

        <div
          className={`${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } xl:hidden fixed top-0 right-0 h-full w-[250px] bg-[#F4F4F4] border-r transition-transform duration-300 ease-in-out z-50`}
        >
          <button onClick={toggleMenu} className="text-3xl p-4">
            &times;
          </button>
          <div className="flex flex-col items-end text-right space-y-4 font-semibold mt-6">
            <a href="/#beranda" className="py-4 px-6 border-b w-full">Beranda</a>
            <a href="/#peningkatan" className="py-4 px-6 border-b w-full">Peningkatan</a>
            <a href="/#mengapa" className="py-4 px-6 border-b w-full">Mengapa Kami?</a>
            <a href="/#ketentuan" className="py-4 px-6 border-b w-full">Ketentuan</a>
            <a href="/#daftar" className="py-4 px-6 border-b w-full">Daftar</a>
            <a href="/" className="py-4 px-6 flex items-center">
              <img src="/icons/globe.svg" alt="Globe" className="w-4 h-4" />
              <p className="ml-2 font-semibold">Bahasa</p>
            </a>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
