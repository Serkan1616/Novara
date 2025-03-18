import { getProducts } from "../services/productService"
import { useState, useEffect } from "react";

const ProductList = () => {

    const [products, setProducts] = useState([]); // Ürün verilerini tutmak için state


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

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">

                <div className="flex items-center justify-center mb-20">
                    <h2 className="text-red-500 text-4xl cursor-pointer hover:text-red-300">
                        Products
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 cursor-pointer bg-red-500">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <img
                                alt={product.name}
                                src={"src"+product.image}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] "
                            />
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductList