import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: 39.99, image: 'product3.jpg' },
  { id: 4, name: 'Product 4', price: 49.99, image: 'product4.jpg' },
];

function App() {
  return (
    <div  className="App">
      <header className="App-header">
        <h1>My E-Commerce Store</h1>
      </header>
      <main>
        <div className="product-grid">
          {products.map(product => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <p>&copy; 2024 My E-Commerce Store</p>
      </footer>
    </div>
  );
}

export default App;
