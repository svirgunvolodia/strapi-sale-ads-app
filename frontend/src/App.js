import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "./services/Api";
import Product from "./components/Product";

import "./App.css"

function App() {
  const [products, setProducts] = useState([])

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
          />
        ))}
      </div>
    </div>
  );
}

export default App;
