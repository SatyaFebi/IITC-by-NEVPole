const TermsAndCondition = () => {
  return (
    <div className="min-h-screen">
      <h1 className="text-center text-4xl font-bold ">Syarat Ketentuan <span className="text-red-600">Registrasi</span></h1>
      <div className="flex mt-20">
        <div className="w-[50%] ml-[80px]">
          <h3 className="font-bold text-[22px]">Usaha Perseorangan ( <span className="text-red-600">Individual</span> )</h3>
          <h5 className="mt-6 text-slate-800 font-bold text-[18px]">Syarat :</h5>
          <div className="font-bold ">
            <p>1. Bentuk usaha berupa outlet aktif yang menjual makanan/minuman<br/> (contoh: restoran, kafe, kedai, home industry, dll)</p>
            <p>2. Menyertakan email & nomor HP pemilik usaha</p>
            <p>3. Menyertakan alamat lengkap & nomor telepon outlet</p>

            <h5 className="mt-10 text-slate-800 font-bold text-[18px]">Dokumen yang Diperlukan : </h5>
            <p>1. KTP pemilik usaha</p>
            <p>2. Nomor rekening pemilik usaha untuk pencairan dana</p>
            <p>3. NPWP Pemilik Usaha, jika memiliki tarif pajak restoran (PBI)</p>
            <p>4. Dokumen pendukung (buku tabungan, laman eBanking, rekening koran) <br/>jika nama pemilik rekening berbeda dengan nama pemilik usaha</p>
          </div>
        </div>

        <div className="w-[50%] mr-[70px]">
          <h3 className="font-bold text-[22px]">Usaha Perusahaan ( <span className="text-red-600">Corporate</span> )</h3>
          <h5 className="mt-6 text-slate-800 font-bold text-[18px]">Syarat :</h5>
          <div className="font-bold">
            <p>1. Bentuk usaha berupa outlet aktif yang menjual makanan/minuman (contoh: restoran, cafe, kedai, home industry, dll)</p>
            <p>2. Menyertakan email & nomor HP pemilik usaha</p>
            <p>3. Menyertakan alamat lengkap & nomor telepon outlet</p>

            <h5 className="mt-10 text-slate-800 font-bold text-[18px]">Dokumen yang Diperlukan : </h5>
            <p>1. KTP (WNI) / KITAS & Paspor (WNA) direktur perusahaan</p>
            <p>2. Surat kuasa yang ditandatangani direktur sesuai akta, serta KTP/KITAS & PASPOR wakil yang ditunjuk perusahaan jika pendaftaran dilakukan oleh wakil yang ditunjuk perusahaan</p>
            <p>3. Dokumen izin usaha (NIB/SIUP/TDUP/TDY)</p>
            <p>4. Akta pendirian, penyesuaian 2007, dan perubahan terbaru</p>
            <p>5. Nomor rekening perusahaan untuk pencairan dana</p>
            <p>6. NPWP perusahaan</p>
            <p>4. Dokumen pendukung (buku tabungan, laman eBanking, rekening koran) jika nama pemilik rekening berbeda dengan nama pemilik usaha</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndCondition