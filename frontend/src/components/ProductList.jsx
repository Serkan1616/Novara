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
        <div className="bg-gray-100 max-w-full px-20">
            <div className="mx-auto px-4 py-8 sm:px-6 sm:py-16">

                <div className="flex items-center justify-center mb-20">
                    <p className="text-lg md:text-6xl cursor-pointer hover:text-gray-700">
                        PRODUCTS
                    </p>
                </div>

                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-8 cursor-pointer">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group border border-6 border-gray-500 rounded-lg">
                            <img
                                alt={product.name}
                                src={"src" + product.image}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] "
                            />
                            <div className="my-4 mx-4">
                                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductList