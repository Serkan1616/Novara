import React, { useRef, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { getProducts } from "../services/productService"; // Services dosyanızdaki getProducts fonksiyonunu import edin

const Recommandation = () => {
  const [products, setProducts] = useState([]); // Ürün verilerini tutmak için state
  const [loading, setLoading] = useState(true); // Loading durumu
  const [error, setError] = useState(null); // Error durumu
  const scrollRef = useRef(null);
  const scrollDistance = 400; // Kaydırma mesafesini burada tutalım

  useEffect(() => {
    // Veritabanından ürünleri al
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data); // Verileri state'e kaydet
      } catch (err) {
        setError("Failed to fetch products"); // Hata durumunda error state'ini set et
      } finally {
        setLoading(false); // Yükleme bittiğinde loading false olur
      }
    };

    fetchProducts();
  }, []);

  const loadRecommendations = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollDistance; // Sağdan sola kaydırma
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollDistance; // Soldan sağa kaydırma
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loading göstergesi
  }

  if (error) {
    return <div>{error}</div>; // Hata mesajı
  }

  return (
    <div className="my-20">
      <div className="flex items-center justify-center mb-10">
        <h1 className="text-2xl mb-10 font-semibold text-black">
          Similar to products you've reviewed <span className="ml-2">😍</span>
        </h1>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex items-center gap-5 overflow-x-scroll scrollbar-hide scroll-smooth w-full no-scrollbar"
        >
          {/* Ürünleri map ile render et */}
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* Scroll butonları */}
        <button
          onClick={scrollLeft}
          className="bg-gray-500 p-2 rounded-full shadow-lg absolute top-1/2 left-0 transform -translate-y-1/2 sm:left-2 md:left-4 lg:left-8"
        >
          <MdArrowBackIos className="w-8 h-8 text-white" />
        </button>
        <button
          onClick={loadRecommendations}
          className="bg-gray-500 p-2 rounded-full shadow-lg absolute top-1/2 right-0 transform -translate-y-1/2 sm:right-2 md:right-4 lg:right-8"
        >
          <MdArrowForwardIos className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Recommandation;
