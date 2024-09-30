const TermsAndCondition = () => {
  return (
    <div className="min-h-screen px-4 my-8">
      <h1 className="text-center text-3xl md:text-4xl font-bold my-6">
        Syarat Ketentuan <span className="text-primary">Registrasi</span>
      </h1>

      <div className="flex flex-col md:flex-row md:space-x-10 mx-4 mt-10">
        <div className="w-full md:w-[50%] mt-10 md:mt-0">
          <h3 className="font-bold text-xl md:text-2xl">
            Usaha Perseorangan (<span className="text-primary">Individual</span>)
          </h3>
          <h5 className="mt-6 text-slate-800 font-bold text-lg">Syarat:</h5>
          <div className="font-bold">
            <p>1. Bentuk usaha berupa outlet aktif yang menjual makanan/minuman (contoh: restoran, kafe, kedai, home industry, dll)</p>
            <p>2. Menyertakan email & nomor HP pemilik usaha</p>
            <p>3. Menyertakan alamat lengkap & nomor telepon outlet</p>

            <h5 className="mt-10 text-slate-800 font-bold text-lg">Dokumen yang Diperlukan:</h5>
            <p>1. KTP pemilik usaha</p>
            <p>2. Nomor rekening pemilik usaha untuk pencairan dana</p>
            <p>3. NPWP Pemilik Usaha, jika memiliki tarif pajak restoran (PBI)</p>
            <p>4. Dokumen pendukung (buku tabungan, laman eBanking, rekening koran) jika nama pemilik rekening berbeda dengan nama pemilik usaha</p>
          </div>
        </div>

        <div className="w-full md:w-[50%] mt-10 md:mt-0">
          <h3 className="font-bold text-xl md:text-2xl">
            Usaha Perusahaan (<span className="text-primary">Corporate</span>)
          </h3>
          <h5 className="mt-6 text-slate-800 font-bold text-lg">Syarat:</h5>
          <div className="font-bold">
            <p>1. Bentuk usaha berupa outlet aktif yang menjual makanan/minuman (contoh: restoran, cafe, kedai, home industry, dll)</p>
            <p>2. Menyertakan email & nomor HP pemilik usaha</p>
            <p>3. Menyertakan alamat lengkap & nomor telepon outlet</p>

            <h5 className="mt-10 text-slate-800 font-bold text-lg">Dokumen yang Diperlukan:</h5>
            <p>1. KTP (WNI) / KITAS & Paspor (WNA) direktur perusahaan</p>
            <p>2. Surat kuasa yang ditandatangani direktur sesuai akta, serta KTP/KITAS & PASPOR wakil yang ditunjuk perusahaan jika pendaftaran dilakukan oleh wakil yang ditunjuk perusahaan</p>
            <p>3. Dokumen izin usaha (NIB/SIUP/TDUP/TDY)</p>
            <p>4. Akta pendirian, penyesuaian 2007, dan perubahan terbaru</p>
            <p>5. Nomor rekening perusahaan untuk pencairan dana</p>
            <p>6. NPWP perusahaan</p>
            <p>7. Dokumen pendukung (buku tabungan, laman eBanking, rekening koran) jika nama pemilik rekening berbeda dengan nama pemilik usaha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
