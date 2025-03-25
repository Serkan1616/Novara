import React, { useState, useEffect } from 'react';
import SimilarProductCard from './SimilarProductCard';
import { getProducts } from "../services/productService"; // API'den ürünleri al

const SimilarProducts = ({ currentProduct }) => {
    const [similarProducts, setSimilarProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(); // API'den tüm ürünleri al
                const filteredProducts = data.filter(
                    product => product.category === currentProduct.category && product._id !== currentProduct._id
                ); // 🔹 Aynı kategoriye sahip ama mevcut üründen farklı olan ürünler
                setSimilarProducts(filteredProducts);
            } catch (error) {
                console.error("Benzer ürünler alınırken hata oluştu:", error);
            }
        };

        fetchProducts();
    }, [currentProduct]);

    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Benzer Ürünler</h2>

            <div className="flex flex-col gap-4">
                {similarProducts.length > 0 ? (
                    similarProducts.map((product) => (
                        <SimilarProductCard key={product._id} product={product} />
                    ))
                ) : (
                    <p className="text-gray-500">Benzer ürün bulunamadı.</p>
                )}
            </div>
        </div>
    );
}

export default SimilarProducts;
