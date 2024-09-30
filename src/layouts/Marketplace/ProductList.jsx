import { useState } from 'react';
import ProductItem from './ProductItem';
import MenuFilter from './MenuFilter';
import ProductDetailPopup from './ProductDetailPopup'; 

const ProductList = () => {
    const orders = [
        {
            title: 'Makanan',
            items: [
                {
                    itemName: 'Ayam Bakar Iga',
                    description: 'Ayam Bakar Madu, perpaduan antara madu dan ayam bersatu rasanya bikin sange aduhai indahnya dunia',
                    originalPrice: '32.000',
                    discountedPrice: '25.000',
                    rating: 4.5,
                },
                {
                    itemName: 'Ayam Penyet',
                    description: 'Ayam Penyet dengan sambal yang mantap dan nasi hangat.',
                    originalPrice: '33.000',
                    discountedPrice: '25.000',
                    rating: 3.5,
                },
            ],
        },
        {
            title: 'Minuman',
            items: [
                {
                    itemName: 'Teh Manis',
                    description: 'Teh manis segar yang cocok untuk menemani makan.',
                    originalPrice: '7.000',
                    discountedPrice: '3.000',
                    rating: 2.1,
                },
                {
                    itemName: 'Kopi Susu',
                    description: 'Kopi susu yang nikmat dan menggugah selera.',
                    originalPrice: '8.000',
                    discountedPrice: '5.000',
                    rating: 4.7,
                },
            ],
        },
    ];

    const [filter, setFilter] = useState('Semua Menu');
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const [cart, setCart] = useState([]); 

    const filteredOrders = orders.filter(order => 
        filter === 'Semua Menu' || order.title === filter
    );

    const handleAddToCart = (product) => {
        setCart([...cart, product]); 
        console.log('Keranjang:', cart); 
    };

    const handleAddClick = (item) => {
        setSelectedProduct(item); 
    };

    return (
        <>
        <MenuFilter onFilterChange={setFilter} />
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md">
            

            {filteredOrders.map((order, index) => (
                <div key={index}>
                    <h3 className="font-bold text-lg mt-4">{order.title}</h3>
                    {order.items.length > 0 ? (
                        order.items.map((item, itemIndex) => (
                            <div key={itemIndex}>
                                <ProductItem 
                                    itemName={item.itemName} 
                                    description={item.description} 
                                    originalPrice={item.originalPrice} 
                                    discountedPrice={item.discountedPrice} 
                                    rating={item.rating} 
                                    onAddClick={() => handleAddClick(item)} 
                                />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">Tidak ada item.</p>
                    )}
                </div>
            ))}

            {selectedProduct && (
                <ProductDetailPopup 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                    onAddToCart={handleAddToCart} 
                />
            )}
        </div>
        </>
    );
};

export default ProductList;
