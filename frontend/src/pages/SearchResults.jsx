import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProducts } from '../services/productService';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
import NavCategoryMenu from '../components/NavCategoryMenu';
import Footer from '../components/Footer';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await searchProducts(query);
                setProducts(data);
            } catch (err) {
                setError('Failed to fetch search results');
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchResults();
        }
    }, [query]);

    return (
        <div>
            <NavBar />
            <NavCategoryMenu />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Search Results for "{query}"
                </h2>
                
                {loading && <div className="text-center py-10">Loading...</div>}
                {error && <div className="text-center py-10 text-red-500">{error}</div>}
                
                <div className="flex flex-wrap">
                    {products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                    {!loading && !error && products.length === 0 && (
                        <div className="w-full text-center py-10 text-gray-500">
                            No products found matching "{query}"
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SearchResults;
