import React, { useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate
import { getProducts } from "../services/productService"; // Add this import
import bagImage from "../assets/bag.png";

const NavBar = () => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products when component mounts
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setAllProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.length > 0) {
      const filtered = allProducts.filter(product => {
        const name = product.name.toLowerCase();
        const description = product.description.toLowerCase();
        const category = product.category.toLowerCase();

        return name.includes(term) ||
          description.includes(term) ||
          category.includes(term);
      });
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  // Handle product selection
  const handleProductSelect = (productId) => {
    setSearchTerm("");
    setSearchResults([]);
    navigate(`/product/${productId}`);
  };

  // 🟢 Sepet sayısını localStorage'dan çek
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalQuantity = storedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalQuantity);

    // 🔄 storage event'ini dinleyerek dinamik güncelleme
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      const newTotalQuantity = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(newTotalQuantity);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [cartCount]);

  return (
    <>
      <nav className="z-50 bg-white/90 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.1)] transition-all duration-300 sticky top-0 left-0 right-0 py-2">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-200">
              <img src={bagImage} alt="Bag Logo" className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                ShopEase
              </span>
            </Link>

            <div className="hidden md:flex relative min-w-[380px]">
              <div className="relative w-full">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 transition-all duration-200"
                />
                {/* Search Results Dropdown */}
                {searchResults.length > 0 && searchTerm && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg max-h-96 overflow-y-auto z-50">
                    {searchResults.map((product) => (
                      <div
                        key={product._id}
                        onClick={() => handleProductSelect(product._id)}
                        className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
                      >
                        <img
                          src={`/src${product.image}`}
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div>
                          <p className="text-sm font-medium">{product.name}</p>
                          <p className="text-xs text-gray-500">${product.price}</p>
                          <p className="text-xs text-gray-400">{product.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/address"
                className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                <MdLocationPin className="text-gray-600 text-xl" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">Delivery to</span>
                  <span className="text-xs text-gray-500">Add Address</span>
                </div>
              </Link>

              <Link to="/cart" className="relative group">
                <div className="p-3 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <SlBasket className="text-xl text-gray-600" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>

              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <FaUser className="text-gray-600" />
                  <span className="hidden md:block text-sm font-medium">Account</span>
                </button>

                <div className="absolute right-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden">
                    <Link to="/login" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                      Login
                    </Link>
                    <Link to="/register" className="block px-6 py-3 text-sm text-gray-600 hover:bg-gray-50 transition-colors duration-200">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;