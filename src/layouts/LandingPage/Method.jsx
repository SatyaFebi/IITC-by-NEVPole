import { useEffect, useRef, useState } from "react";

const datas = [
    {
        'id': '1',
        'img': 'icons/Cara1.png',
        'number': '1.',
        'title': 'Scan, Pesan, Bayar',
        'body': 'Pelanggan cukup pesan secara online dan hanya duduk di meja'
    },
    {
        'id': '2',
        'img': 'icons/Cara2.png',
        'number': '2.',
        'title': 'Pembayaran Otomatis',
        'body': 'Pembayaran otomatis dengan pembayaran digital secara real time'
    },
    {
        'id': '3',
        'img': 'icons/Cara3.png',
        'number': '3.',
        'title': 'Notifikasi Pesanan',
        'body': 'Notifikasi pesanan akan langsung masuk ke penjual dan dapat diproses oleh penjual'
    },
    {
        'id': '4',
        'img': 'icons/Cara4.png',
        'number': '4.',
        'title': 'Fleksibilitas',
        'body': 'Dengan menggunakan layanan ini akan memudahkan antara penjual dan pembeli'
    },
    {
        'id': '5',
        'img': 'icons/Cara5.png',
        'number': '5.',
        'title': 'Data Pesanan',
        'body': 'Pendataan produk dan pesanan yang masuk sehingga memudahkan penjual mengatur stok barang'
    },
    {
        'id': '6',
        'img': 'icons/Cara6.png',
        'number': '6.',
        'title': 'Rekap Penjualan',
        'body': 'Rekap penjualan anda, baik pembayaran secara tunai maupun non tunai'
    }
];

const Method = () => {
    const [visible, setVisible] = useState(Array(datas.length).fill(false));
    const refs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = refs.current.indexOf(entry.target);
                    setVisible((prev) => {
                        const newVisible = [...prev];
                        newVisible[index] = true;
                        return newVisible;
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0 });

        refs.current.forEach(ref => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            refs.current.forEach(ref => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div className="min-h-screen" id="peningkatan">
            <div className="text-center items-center">
                <h1 className="md:text-4xl text-2xl font-bold text-slate-800">Cara Kami <span className="text-yellow-400 underline">Meningkatkan</span> Penjualan Restoran</h1>
                <div className="flex flex-wrap">
                    {datas.map((data, index) => (
                        <div
                            className={`block mt-20 mx-auto opacity-0 ${visible[index] ? 'fade-in' : ''}`}
                            key={data.id}
                            ref={el => refs.current[index] = el}
                        >
                            <img src={data.img} alt={data.title} className="mx-auto" />
                            <h1 className={`text-2xl font-bold opacity-0 text-slate-800 ${index === 1 ? 'mt-5' : ''}`}>{data.number}</h1>
                            <h1 className={`text-2xl font-bold opacity-0 text-slate-800 ${visible[index] ? 'fade-in' : ''}`}>{data.title}</h1>
                            <p className={`mx-3 w-[380px] text-center opacity-0 text-slate-800 ${visible[index] ? 'fade-in' : ''}`}>{data.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Method;