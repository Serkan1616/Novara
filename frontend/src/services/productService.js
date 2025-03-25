import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// 📌 Fetch all products
export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// 📌 Fetch a single product by ID
export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// 📌 Add a new product
export const createProduct = async (productData) => {
  const response = await axios.post(API_URL, productData);
  return response.data;
};

// 📌 Update a product
export const updateProduct = async (id, productData) => {
  const response = await axios.put(`${API_URL}/${id}`, productData);
  return response.data;
};

// 📌 Delete a product
export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

// 📌 Fetch products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_URL}/category/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw new Error('Failed to fetch products by category');
  }
};

// 📌 Search products
export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    throw new Error('Failed to search products');
  }
};
