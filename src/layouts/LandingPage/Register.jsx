import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Proses data di sini (misalnya, kirim ke server)

        navigate('/');
    };

  return (
    <div className="min-h-[70vh]">  
        <h1 className="mt-20 text-center text-4xl font-bold">Daftarkan <span className="text-red-600">Tokomu</span> Sekarang!</h1>
        <h2 className="mt-3 text-center text-xl font-bold">Daftar Sekarang dan Rasakan Peningkatan Penjualanmu</h2>
        <form onSubmit={handleSubmit} method="post">
            <div className="flex mt-16">
                <div className="w-[50%] flex flex-wrap ml-[80px]">
                    <div className="flex flex-wrap justify-between mt-16">
                        <div className="w-[48%] mb-4">
                            <label htmlFor="nama" className="text-lg font-semibold">Nama Lengkap<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Isi Nama Lengkapmu Disini" className="w-full h-[38px] border border-solid border-black rounded-lg pl-6"/>
                        </div>
                        <div className="w-[48%] mb-4">
                            <label htmlFor="whatsapp" className="text-lg font-semibold">Nomor Whatsapp<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Isi Nomor Whatsappmu Disini" className="w-full h-[38px] border border-solid border-black rounded-lg pl-6"/>
                        </div>
                        <div className="w-[48%] mb-4">
                            <label htmlFor="toko" className="text-lg font-semibold">Nama Tokomu<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Isi Nama Tokomu Disini" className="w-full h-[38px] border border-solid border-black rounded-lg pl-6"/>
                        </div>
                        <div className="w-[48%] mb-4">
                            <label htmlFor="email" className="text-lg font-semibold">Email Aktif<span className="text-red-600">*</span></label>
                            <input type="text" placeholder="Isi Email Aktifmu Disini" className="w-full h-[38px] border border-solid border-black rounded-lg pl-6"/>
                        </div>
                    </div>
                </div>
                <div className="w-[50%]">
                    <div className="mt-10 ml-20 w-[450px] h-[200px] border border-solid border-[#efefef] rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold flex mt-[50px] ml-10">Your Location</h1>
                        <div className="text-center flex justify-center items-center h-[70px]">
                            <input type="text" placeholder="Enter Your Location" className="py-2 pl-6 rounded-xl border border-slate-500"/>
                            <button type="submit" className="ml-3 w-[120px] h-[40px] border rounded-2xl border-yellow-500 bg-yellow-500 font-bold">ENTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register