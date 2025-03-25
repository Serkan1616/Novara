import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../services/productService';

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { category } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getProductsByCategory(category);
                setProducts(data);
            } catch (err) {
                console.error("Error in CategoryPage:", err);
                setError('Failed to fetch products. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [category]);

    if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    if (error) return <div className="flex justify-center items-center min-h-screen text-red-500">{error}</div>;

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 mt-[88px] md:mt-[72px]">
            <div className="flex items-center justify-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                    {category.split('-').map(word =>
                        word.charAt(0).toUpperCase() + word.slice(1)
                    ).join(' ')}
                </h2>
            </div>

            <div className="flex flex-wrap">
                {products.map(product => (
                    <ProductCard key={product._id} product={product} />
                ))}
                {products.length === 0 && (
                    <div className="w-full text-center py-10 text-gray-500">
                        No products found in this category
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
