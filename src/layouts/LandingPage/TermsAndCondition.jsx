import { useState } from "react";

const TermsAndCondition = () => {
    const [isIndividualOpen, setIsIndividualOpen] = useState(false);
    const [isCorporateOpen, setIsCorporateOpen] = useState(false);

    return (
        <div className="md:min-h-screen flex flex-col justify-center h-fit md:px-16 px-4 md:my-8 my-44" id="ketentuan">
            <h1 className="text-center text-3xl md:text-4xl font-bold my-6">
                Syarat Ketentuan{" "}
                <span className="text-primary">Registrasi</span>
            </h1>

            <div className="hidden md:flex md:flex-row md:space-x-10 mx-4 mt-10">
                <div className="w-full md:w-[50%]">
                    <h3 className="font-bold text-xl md:text-2xl">
                        Usaha Perseorangan (
                        <span className="text-primary">Individual</span>)
                    </h3>
                    <h5 className="mt-6 text-slate-800 font-bold text-lg">
                        Syarat:
                    </h5>
                    <div className="font-bold">
                        <p>
                            1. Bentuk usaha berupa outlet aktif yang menjual
                            makanan/minuman (contoh: restoran, kafe, kedai, home
                            industry, dll)
                        </p>
                        <p>2. Menyertakan email & nomor HP pemilik usaha</p>
                        <p>
                            3. Menyertakan alamat lengkap & nomor telepon outlet
                        </p>

                        <h5 className="mt-10 text-slate-800 font-bold text-lg">
                            Dokumen yang Diperlukan:
                        </h5>
                        <p>1. KTP pemilik usaha</p>
                        <p>
                            2. Nomor rekening pemilik usaha untuk pencairan dana
                        </p>
                        <p>
                            3. NPWP Pemilik Usaha, jika memiliki tarif pajak
                            restoran (PBI)
                        </p>
                        <p>
                            4. Dokumen pendukung (buku tabungan, laman eBanking,
                            rekening koran) jika nama pemilik rekening berbeda
                            dengan nama pemilik usaha
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-[50%]">
                    <h3 className="font-bold text-xl md:text-2xl">
                        Usaha Perusahaan (
                        <span className="text-primary">Corporate</span>)
                    </h3>
                    <h5 className="mt-6 text-slate-800 font-bold text-lg">
                        Syarat:
                    </h5>
                    <div className="font-bold">
                        <p>
                            1. Bentuk usaha berupa outlet aktif yang menjual
                            makanan/minuman (contoh: restoran, cafe, kedai, home
                            industry, dll)
                        </p>
                        <p>2. Menyertakan email & nomor HP pemilik usaha</p>
                        <p>
                            3. Menyertakan alamat lengkap & nomor telepon outlet
                        </p>

                        <h5 className="mt-10 text-slate-800 font-bold text-lg">
                            Dokumen yang Diperlukan:
                        </h5>
                        <p>
                            1. KTP (WNI) / KITAS & Paspor (WNA) direktur
                            perusahaan
                        </p>
                        <p>
                            2. Surat kuasa yang ditandatangani direktur sesuai
                            akta, serta KTP/KITAS & PASPOR wakil yang ditunjuk
                            perusahaan jika pendaftaran dilakukan oleh wakil
                            yang ditunjuk perusahaan
                        </p>
                        <p>3. Dokumen izin usaha (NIB/SIUP/TDUP/TDY)</p>
                        <p>
                            4. Akta pendirian, penyesuaian 2007, dan perubahan
                            terbaru
                        </p>
                        <p>5. Nomor rekening perusahaan untuk pencairan dana</p>
                        <p>6. NPWP perusahaan</p>
                        <p>
                            7. Dokumen pendukung (buku tabungan, laman eBanking,
                            rekening koran) jika nama pemilik rekening berbeda
                            dengan nama pemilik usaha
                        </p>
                    </div>
                </div>
            </div>

            <div className="block md:hidden space-y-4 mx-4 mt-10">
                <div className="border rounded-lg shadow-md p-4">
                    <button
                        onClick={() => setIsIndividualOpen(!isIndividualOpen)}
                        className="w-full text-left font-bold text-xl flex justify-between items-center"
                    >
                        {/* Elemen tambahan jika diperlukan, gunakan span atau atur styling */}
                        <span className="block">
                            Usaha Perseorangan (
                            <span className="text-primary">Individual</span>)
                        </span>
                        <span>{isIndividualOpen ? "-" : "+"}</span>
                    </button>

                    <div
                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                            isIndividualOpen ? "max-h-screen" : "max-h-0"
                        }`}
                    >
                        <div className="mt-4">
                            <h5 className="text-slate-800 font-bold text-lg">
                                Syarat:
                            </h5>
                            <div className="font-bold">
                                <p>
                                    1. Bentuk usaha berupa outlet aktif yang
                                    menjual makanan/minuman (contoh: restoran,
                                    kafe, kedai, home industry, dll)
                                </p>
                                <p>
                                    2. Menyertakan email & nomor HP pemilik
                                    usaha
                                </p>
                                <p>
                                    3. Menyertakan alamat lengkap & nomor
                                    telepon outlet
                                </p>

                                <h5 className="mt-10 text-slate-800 font-bold text-lg">
                                    Dokumen yang Diperlukan:
                                </h5>
                                <p>1. KTP pemilik usaha</p>
                                <p>
                                    2. Nomor rekening pemilik usaha untuk
                                    pencairan dana
                                </p>
                                <p>
                                    3. NPWP Pemilik Usaha, jika memiliki tarif
                                    pajak restoran (PBI)
                                </p>
                                <p>
                                    4. Dokumen pendukung (buku tabungan, laman
                                    eBanking, rekening koran) jika nama pemilik
                                    rekening berbeda dengan nama pemilik usaha
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border rounded-lg shadow-md p-4">
                    <button
                        onClick={() => setIsCorporateOpen(!isCorporateOpen)}
                        className="w-full text-left font-bold text-xl flex justify-between"
                    >
                        <span className="block">
                            Usaha Perusahaan (
                            <span className="text-primary">Corporate</span>)
                        </span>
                        <span>{isCorporateOpen ? "-" : "+"}</span>
                    </button>

                    <div
                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                            isCorporateOpen ? "max-h-screen" : "max-h-0"
                        }`}
                    >
                        <div className="mt-4">
                            <h5 className="text-slate-800 font-bold text-lg">
                                Syarat:
                            </h5>
                            <div className="font-bold">
                                <p>
                                    1. Bentuk usaha berupa outlet aktif yang
                                    menjual makanan/minuman (contoh: restoran,
                                    cafe, kedai, home industry, dll)
                                </p>
                                <p>
                                    2. Menyertakan email & nomor HP pemilik
                                    usaha
                                </p>
                                <p>
                                    3. Menyertakan alamat lengkap & nomor
                                    telepon outlet
                                </p>

                                <h5 className="mt-10 text-slate-800 font-bold text-lg">
                                    Dokumen yang Diperlukan:
                                </h5>
                                <p>
                                    1. KTP (WNI) / KITAS & Paspor (WNA) direktur
                                    perusahaan
                                </p>
                                <p>
                                    2. Surat kuasa yang ditandatangani direktur
                                    sesuai akta, serta KTP/KITAS & PASPOR wakil
                                    yang ditunjuk perusahaan jika pendaftaran
                                    dilakukan oleh wakil yang ditunjuk
                                    perusahaan
                                </p>
                                <p>3. Dokumen izin usaha (NIB/SIUP/TDUP/TDY)</p>
                                <p>
                                    4. Akta pendirian, penyesuaian 2007, dan
                                    perubahan terbaru
                                </p>
                                <p>
                                    5. Nomor rekening perusahaan untuk pencairan
                                    dana
                                </p>
                                <p>6. NPWP perusahaan</p>
                                <p>
                                    7. Dokumen pendukung (buku tabungan, laman
                                    eBanking, rekening koran) jika nama pemilik
                                    rekening berbeda dengan nama pemilik usaha
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndCondition;
