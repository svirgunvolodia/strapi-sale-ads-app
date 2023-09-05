import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct, updateProduct } from "./services/Api";
import Product from "./components/Product";

import "./App.css"
import EditProductModal from "./components/EditProductModal";

function App() {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const fetchProducts = async () => {
    const { isSuccessful, data } = await getProducts()
    if (isSuccessful) {
      setProducts(data.data)
    }
  }

  const handleProductDelete = async (productId) => {
    const confirmResult = window.confirm("Are you sure want to delete this product?")
    if (confirmResult) {
      const { isSuccessful } = await deleteProduct({ productId: productId })
      if (isSuccessful) {
        const filteredProducts = products.filter((product) => product.id !== productId);
        setProducts(filteredProducts)
      }
    }
  }

  const openEditModal = (productId) => {
    const product = products.find((product) => product.id == productId);
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const saveEditedProduct = async (editedProduct) => {
    const { isSuccessful } = await updateProduct({ productId: selectedProduct.id, data: { data: editedProduct } });
    if (isSuccessful) {
      const updatedProducts = products.map((product) => {
        if (product.id === selectedProduct.id) {
          product.attributes.Title = editedProduct.Title
          product.attributes.Description = editedProduct.Description
        }

        return product
      });

      setProducts(updatedProducts);
    }
  };

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="page-wrapper">
      <div className="products">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDeleteSubmit={handleProductDelete}
            onEditSubmit={openEditModal}
          />
        ))}
      </div>
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={saveEditedProduct}
        product={selectedProduct}
      />
    </div>
  );
}

export default App;
