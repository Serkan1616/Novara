import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Button, Typography } from "@material-tailwind/react";
import NavBar from '../components/NavBar';
import NavCategoryMenu from '../components/NavCategoryMenu';
import Footer from '../components/Footer';

const Cart = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: "Earthen Bottle",
            price: 48,
            quantity: 1,
            imageSrc: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
            imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
        },
        {
            id: 2,
            name: "Nomad Tumbler",
            price: 35,
            quantity: 2,
            imageSrc: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
            imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
        },
    ]);

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item =>
            item.id === id ? { ...item, quantity } : item
        ));
    };

    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column (Cart Items) */}
                <div className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">Your Cart</h2>
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
                            <div className="flex items-center space-x-4">
                                <img src={item.imageSrc} alt={item.imageAlt} className="w-24 h-24 object-cover rounded-md" />
                                <div>
                                    <Typography variant="h6" color="gray">{item.name}</Typography>
                                    <p className="text-gray-500">Price: ${item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                    className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                                >
                                    -
                                </Button>
                                <Typography variant="h6" color="gray">{item.quantity}</Typography>
                                <Button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                                >
                                    +
                                </Button>
                                <Button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <FaTrash />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column (Total and Checkout) */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <Typography variant="h6" color="gray">Subtotal:</Typography>
                            <Typography variant="h6" color="gray">${totalAmount.toFixed(2)}</Typography>
                        </div>
                        <div className="flex justify-between">
                            <Typography variant="h6" color="gray">Shipping:</Typography>
                            <Typography variant="h6" color="gray">Free</Typography>
                        </div>
                        <div className="flex justify-between mt-6 border-t pt-4">
                            <Typography variant="h6" color="gray" className="font-bold">Total:</Typography>
                            <Typography variant="h6" color="gray" className="font-bold">${totalAmount.toFixed(2)}</Typography>
                        </div>
                    </div>
                    <Button
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
