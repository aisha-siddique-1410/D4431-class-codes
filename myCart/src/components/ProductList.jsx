import React from 'react'
import Product from './Product';

function ProductList({ productList, incrementQuantity}) {
  return (
    <>
      {productList.map((product, index) => (
        <Product 
          product={product} 
          key={index} 
          index = {index}
          incrementQuantity={incrementQuantity}
        />
      ))}
    </>
  )
}

export default ProductList;