import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

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
        <div className='mt-10'>
            <h1 className='text-2xl mb-4'>Similar to products you've reviewed 😍</h1>
            <div className='relative'>
                <div ref={scrollRef} className='flex items-center gap-5 overflow-x-scroll scrollbar-hide scroll-smooth w-full no-scrollbar'>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                <button onClick={scrollLeft} className='bg-yellow-500 p-2 rounded-full shadow-lg absolute top-1/2 left-0 transform -translate-y-1/2'>
                    <IoIosArrowDropleft className="w-[75px] h-[75px] text-white" />
                </button>
                <button onClick={loadRecommendations} className='bg-yellow-500 p-2 rounded-full shadow-lg absolute top-1/2 right-0 transform -translate-y-1/2'>
                    <IoIosArrowDropright className="w-[75px] h-[75px] text-white" />
                </button>
            </div>
        </div>
    );
}

export default Recommandation;