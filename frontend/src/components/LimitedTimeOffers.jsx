import React, { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { getProducts } from "../services/productService"; // getProducts API'den ürünleri al

const LimitedTimeOffers = () => {
    const [timeLeft, setTimeLeft] = useState(5 * 60 * 60); // 5 hours in seconds
    const [products, setProducts] = useState([]); // Ürünleri tutmak için state

    const scrollRef = useRef(null);

    const loadRecommendations = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 400; // Sağdan sola 400px kaydırma
        }
    }

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 400; // Soldan sağa 400px kaydırma
        }
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts(); // API'den ürün verilerini al
                setProducts(data); // Ürünleri state'e kaydet
            } catch (error) {
                console.error("Ürünler alınırken bir hata oluştu:", error);
            }
        };

        fetchProducts(); // Ürünleri almak için fonksiyonu çağır
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    return (
        <div className='flex flex-col items-center justify-between my-10 bg-gray-purple-500 p-4 rounded-lg shadow-md'>
            <div className='flex items-center justify-center gap-20 mb-10 w-full'>
                <h1 className='text-2xl font-semibold text-black'>Limited Offers <span className='ml-2'>&#x27A4;</span></h1>
                <div className='flex items-center space-x-2'>
                    {formatTime(timeLeft).split(':').map((unit, index) => (
                        <React.Fragment key={index}>
                            <div className='bg-white text-black text-2xl font-semibold px-3 py-1 rounded-md'>
                                {unit}
                            </div>
                            {index < 2 && <span className='text-2xl font-semibold text-white'>:</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className='relative w-full'>
                <div ref={scrollRef} className='flex items-center gap-5 overflow-x-scroll scrollbar-hide scroll-smooth w-full no-scrollbar'>
                    {/* Ürünleri dinamik olarak render et */}
                    {products.length > 0 ? (
                        products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))
                    ) : (
                        <p className="text-white">Loading Products...</p> // Veri yükleniyorsa gösterilecek mesaj
                    )}
                </div>
                <button onClick={scrollLeft} className='bg-gray-500 p-2 rounded-full shadow-lg absolute top-1/2 left-0 transform -translate-y-1/2'>
                    <MdArrowBackIos className="w-8 h-8 text-white" />
                </button>
                <button onClick={loadRecommendations} className='bg-gray-500 p-2 rounded-full shadow-lg absolute top-1/2 right-0 transform -translate-y-1/2'>
                    <MdArrowForwardIos className="w-8 h-8 text-white" />
                </button>
            </div>
        </div>
    );
}

export default LimitedTimeOffers;
