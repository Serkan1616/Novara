import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const PaymentSuccess = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
                <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
                    <FaCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Payment Successful!
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Thank you for your purchase. Your order has been successfully processed.
                    </p>
                    <div className="space-y-4">
                        <Link
                            to="/"
                            className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                            Continue Shopping
                        </Link>
                        <Link
                            to="/profile"
                            className="block w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                        >
                            View Orders
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PaymentSuccess;
