import React from 'react'
import './ProductTab.css'
import product1 from '../../assets/product-1.png'
import product2 from '../../assets/product-2.png'
import product3 from '../../assets/product-3.png'
import product4 from '../../assets/product-4.png'
import product5 from '../../assets/product-5.png'
import product6 from '../../assets/product-6.png'

const allProducts = [
  {
    id: 1,
    name: 'CloudMotion',
    image: product1,
    price: 29.99
  },
  {
    id: 2,
    name: 'Nebula flex',
    image: product2,
    price: 39.99
  },
  {
    id: 3,
    name: 'Aether Glide',
    image: product3,
    price: 49.99
  },
  { id: 4,
    name: 'Stellar Wave',
    image: product4,
    price: 59.99
  },
  {
    id: 5,
    name: 'Lunar Eclipse',
    image: product5,
    price: 69.99 
  },
  { id: 6,
    name: 'Solar Flare',
    image: product6,
    price: 79.99
  }
]

const ProductTab = () => {
  return (
    <div className="product-tab" id='products'>
      <div className="product-title">
        <h2>New Arrival</h2>
        <button><ion-icon name="arrow-forward-outline"></ion-icon></button>
      </div>

      <div className="product-list">
        {allProducts.map((product) => (
          <div className='product-item' key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button><ion-icon name="cart"></ion-icon> Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductTab