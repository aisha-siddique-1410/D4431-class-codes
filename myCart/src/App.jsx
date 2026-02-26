import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {

  const products = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quantity: 0
    },
    {
      price: 9999,
      name: "Redmi Note 10s Max",
      quantity: 0
    }
  ];

  const [productList, setProductList] = useState(products);

  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <ProductList 
          productList={productList} 
          incrementQuantity={incrementQuantity}
        />
      </div>
    </>
  )
}

export default App;