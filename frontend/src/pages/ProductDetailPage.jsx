import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import ProductDetail from "../components/ProductDetail";
import SimilarProducts from "../components/SimilarProducts"; // Yeni bileşen import edildi
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProductById(id);
                setProduct(data);
            } catch (error) {
                console.error("Ürün bilgisi alınırken hata oluştu:", error);
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <p className="text-center text-white">Loading product details...</p>;
    }

    return (
        <div>
            <NavBar />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 my-10 px-4">
                {/* Ürün Detayları */}
                <div className="lg:col-span-2">
                    <ProductDetail product={product} />
                </div>

                {/* Benzer Ürünler */}
                <div className="lg:col-span-1">
                    <SimilarProducts currentProduct={product} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProductDetailPage;
