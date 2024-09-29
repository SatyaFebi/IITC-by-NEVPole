import { useState } from 'react';
import ProductItem from '../../components/MarketplaceComp/ProductItem';
import MenuFilter from './MenuFilter';
import ProductDetailPopup from '../../components/MarketplaceComp/ProductDetailPopup'; 

const ProductList = () => {
    const orders = [
        {
            title: 'Makanan',
            items: [
                {
                    itemName: 'Ayam Bakar Iga',
                    description: 'Ayam Bakar Madu, perpaduan antara madu dan ayam bersatu rasanya bikin sange aduhai indahnya dunia',
                    originalPrice: '20.000',
                    discountedPrice: '0',
                    rating: 4.5,
                },
                {
                    itemName: 'Ayam Penyet',
                    description: 'Ayam Penyet dengan sambal yang mantap dan nasi hangat.',
                    originalPrice: '25.000',
                    discountedPrice: '0',
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
                    originalPrice: '5.000',
                    discountedPrice: '0',
                    rating: 4.0,
                },
                {
                    itemName: 'Kopi Susu',
                    description: 'Kopi susu yang nikmat dan menggugah selera.',
                    originalPrice: '10.000',
                    discountedPrice: '0',
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
        <div className="rounded-md w-full h-fit py-4 px-3 mt-2 shadow-md">
            <MenuFilter onFilterChange={setFilter} />

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
    );
};

export default ProductList;
