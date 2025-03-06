import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-white py-8 border-t border-gray-300">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-lg font-semibold text-blue-gray-900">Company</h2>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>
                                <Link to="/about" className="hover:text-blue-600">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                            </li>
                            <li>
                                <Link to="/careers" className="hover:text-blue-600">Careers</Link>
                            </li>
                            <li>
                                <Link to="/faq" className="hover:text-blue-600">FAQ</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="text-lg font-semibold text-blue-gray-900">Services</h2>
                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                            <li>
                                <Link to="/shipping" className="hover:text-blue-600">Shipping</Link>
                            </li>
                            <li>
                                <Link to="/returns" className="hover:text-blue-600">Returns</Link>
                            </li>
                            <li>
                                <Link to="/support" className="hover:text-blue-600">Customer Support</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="text-lg font-semibold text-blue-gray-900">Follow Us</h2>
                        <div className="mt-4 flex space-x-4 text-xl text-gray-600">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <FaFacebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <FaTwitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <FaInstagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h2 className="text-lg font-semibold text-blue-gray-900">Subscribe</h2>
                        <p className="mt-4 text-sm text-gray-600">Get the latest news and updates</p>
                        <div className="mt-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <button className="mt-2 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-300 pt-4 text-center text-sm text-gray-600">
                    <p>&copy; 2025 Your Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
