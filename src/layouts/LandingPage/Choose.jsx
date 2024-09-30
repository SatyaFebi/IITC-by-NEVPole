import { useEffect, useRef, useState } from "react";

const data = {
  "background": "./images/background-2.svg",
  "header": {
    "title": "Kenapa Harus ",
    "highlight": "Kami"
  },
  "content": [
    {
      "icon": "./images/Thumbsup.svg",
      "title": "Proses Transaksi Lebih Cepat:",
      "description": " Dengan sistem kasir online kami, proses transaksi menjadi lebih cepat dan akurat, sehingga mengurangi waktu tunggu pelanggan."
    },
    {
      "icon": "./images/Question.svg",
      "title": "Pengelolaan Pesanan yang Efektif:",
      "description": " Pemilik usaha dapat dengan mudah memantau dan mengelola semua pesanan yang masuk melalui dashboard yang user-friendly."
    },
    {
      "icon": "./images/Star.svg",
      "title": "Laporan Penjualan Detail:",
      "description": " Dapatkan laporan penjualan secara real-time dan historis untuk membantu menganalisis kinerja bisnis dan membuat keputusan yang lebih baik."
    }
  ],
  "image": "./images/shadow.png"
};

const Choose = () => {
  const [visible, setVisible] = useState(Array(data.content.length + 1).fill(false)); // Status visibilitas untuk setiap elemen
  const ref = useRef([]);
  const imgRef = useRef(null); // Referensi untuk gambar

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = ref.current.indexOf(entry.target);
          if (index !== -1) {
            setVisible(prev => {
              const newVisible = [...prev];
              newVisible[index] = true; // Set elemen yang terlihat ke true
              return newVisible;
            });
          }
          observer.unobserve(entry.target); // Hentikan observasi setelah terlihat
        }
      });
    }, { threshold: 0 }); // Threshold bisa disesuaikan

    ref.current.forEach(child => {
      observer.observe(child); // Amati setiap elemen
    });

    // Amati gambar terakhir
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      ref.current.forEach(child => {
        observer.unobserve(child); // Hentikan observasi saat unmount
      });
      if (imgRef.current) {
        observer.unobserve(imgRef.current); // Hentikan observasi untuk gambar
      }
    };
  }, []);

  return (
    <div id="mengapa">
      <img
        src={data.background}
        alt=""
        className="w-full h-fit absolute -z-20"
      />
      <div
        className="min-h-screen mt-[130px] flex flex-col items-center justify-center"
        id="partnership"
      >
        <h1 className={`text-center text-4xl opacity-0 font-bold ${visible[0] ? 'fade-in' : ''}`}>
          {data.header.title} <span className="text-primary">{data.header.highlight}</span>?
        </h1>
        <div className="flex md:flex-row flex-col-reverse md:justify-between justify-center items-center md:px-14 px-4">
          <div className="mt-14 block md:w-[60%] w-full">
            {data.content.map((item, index) => (
              <div
                className="mb-10 flex ml-10"
                key={index}
                ref={(el) => {
                  if (el) ref.current[index] = el; 
                }}
              >
                <img src={item.icon} alt="" className={`transition-opacity opacity-0 duration-500 ${visible[index] ? 'icon-entrance' : ''}`} />
                <p className={`ml-5 font-medium opacity-0 text-lg ${visible[index] ? 'fade-in' : ''}`}>
                  <span className="font-bold">{item.title}</span>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center">
          <img
              src='./images/box.png'
              alt=""
              ref={imgRef} 
              className="w-[420px] absolute wave-items"
            />
            <img
              src={data.image}
              alt=""
              ref={imgRef} 
              className="w-[420px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
