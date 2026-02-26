import React from 'react'

function Product({ product, index, incrementQuantity }) {
  return (
    <div className='row'>
      <div className='col-6'>
        <h2>
          {product.name} 
          <span className="badge"> ₹{product.price}</span>
        </h2>
      </div>

      <div className='col-4'>
        <div className="btn-group">
          <button type="button">-</button>
          <button type="button">{product.quantity}</button>
          <button 
            type="button"
            onClick={() => incrementQuantity(index)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product;