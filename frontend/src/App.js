import React, { useEffect, useState } from "react";
import { getProducts } from "./services/Api";
import Product from "./components/Product";

function App() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { isSuccessful, data } = await getProducts()
    if (isSuccessful) {
      setProducts(data.data)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="App">
      <ul>
        {products.map((product) => (
          <li>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
