import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    // 🟢 Component yüklendiğinde `localStorage`'dan ürünleri çek
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // 🔹 Ürünü sepetten çıkar (✅ Düzeltilmiş Versiyon)
    const removeFromCart = (_id) => {
        const updatedCart = cart.filter(item => item._id !== _id);  // 🔹 item.id yerine item._id kullanıldı
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // 🔹 Ürün miktarını güncelle
    const updateQuantity = (_id, quantity) => {
        const updatedCart = cart.map(item =>
            item._id === _id ? { ...item, quantity } : item
        );
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = () => {
        navigate('/payment');
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">Your Cart</h2>
                    {cart.map((item) => (
                        <div key={item._id} className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={"../src" + item.image}
                                    alt={item.imageAlt}
                                    className="w-24 h-24 object-cover rounded-md"
                                />
                                <div>
                                    <Typography variant="h6" color="gray">{item.name}</Typography>
                                    <p className="text-gray-500">Price: ${item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-700">
                                    <FaTrash />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                    <div className="flex justify-between">
                        <Typography variant="h6" color="gray">Total:</Typography>
                        <Typography variant="h6" color="gray" className="font-bold">${totalAmount.toFixed(2)}</Typography>
                    </div>
                    <Button 
                        onClick={handleCheckout}
                        className="bg-blue-600 text-white hover:bg-blue-700 mt-6 w-full py-2 rounded"
                    >
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
