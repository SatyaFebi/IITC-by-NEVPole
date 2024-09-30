import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nama: "",
        whatsapp: "",
        toko: "",
        email: "",
        location: ""
    });

    const [focusedField, setFocusedField] = useState(null); // Menyimpan field yang sedang fokus

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (name) => {
        setFocusedField(name); // Set field yang sedang fokus
    };

    const handleBlur = () => {
        setFocusedField(null); // Reset field yang sedang fokus
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nama, whatsapp, toko, email, location } = formData;

        // Simple validation
        if (!nama || !whatsapp || !toko || !email || !location) {
            alert("Harap lengkapi semua data.");
            return;
        }

        console.log(formData);

        navigate("/");
    };

    const inputFields = [
        { label: "Nama Lengkap", name: "nama", placeholder: "John Doe", type: "text" },
        { label: "Nomor Whatsapp", name: "whatsapp", placeholder: "0812345678", type: "text" },
        { label: "Nama Tokomu", name: "toko", placeholder: "Tokoku.", type: "text" },
        { label: "Email Aktif", name: "email", placeholder: "example@email.com", type: "email" }
    ];

    return (
        <div className="h-fit flex flex-col justify-center items-center px-4 my-24" id="daftar">
            <h1 className="text-center text-3xl sm:text-4xl font-bold">
                Daftarkan <span className="text-primary">Tokomu</span> Sekarang!
            </h1>
            <h2 className="mt-3 text-center text-lg sm:text-xl font-bold">
                Daftar Sekarang dan Rasakan Peningkatan Penjualanmu
            </h2>
            <form onSubmit={handleSubmit} method="post" className="w-full md:w-3/4 mt-16">
                <div className="flex flex-col md:flex-row mx-auto items-center justify-center">
                    <div className="w-full md:w-1/2 flex flex-wrap">
                        <div className="flex flex-wrap justify-between w-full px-4">
                            {inputFields.map((field, index) => (
                                <div className="w-full md:w-[48%] mb-4" key={index}>
                                    <label
                                        htmlFor={field.name}
                                        className="text-lg font-semibold"
                                    >
                                        {field.label}
                                        <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus(field.name)} // Tambahkan event onFocus
                                        onBlur={handleBlur} // Tambahkan event onBlur
                                        placeholder={field.placeholder}
                                        className={`w-full h-[38px] border border-solid border-black rounded-lg pl-6 transition-all duration-500 ${focusedField === field.name ? 'input-focus' : ''}`} // Gunakan class input-focus
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center mt-8 mb-8 md:mt-0">
                        <div className="md:w-[80%] w-full h-[200px] px-8 border border-solid border-[#efefef] rounded-lg shadow-md">
                            <h1 className="text-2xl font-bold flex mt-[50px] justify-between">
                                Your Location
                            </h1>
                            <div className="text-center flex justify-start items-center h-[70px] w-full">
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus("location")} 
                                    onBlur={handleBlur} 
                                    placeholder="Your Location"
                                    className={`py-2 pl-6 rounded-xl border border-slate-500 w-[60%] transition-all duration-300 ${focusedField === "location" ? 'input-focus' : ''}`} // Gunakan class input-focus
                                />
                                <button
                                    type="submit"
                                    className="ml-3 w-[30%] h-[40px] border rounded-2xl border-yellow-400 bg-yellow-400 font-semibold"
                                >
                                    ENTER
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
