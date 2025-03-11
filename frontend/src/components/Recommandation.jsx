import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Recommandation = () => {

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

    return (
        <div className='my-20'>
            <div className='flex items-center justify-center mb-10'>
                <h1 className='text-2xl mb-10 font-semibold text-black'>Similar to products you've reviewed <span className='ml-2'>😍</span></h1>
            </div>
            <div className='relative'>
                <div ref={scrollRef} className='flex items-center gap-5 overflow-x-scroll scrollbar-hide scroll-smooth w-full no-scrollbar'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
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

export default Recommandation;