import axios from 'axios';
import React, { useState } from 'react';
import Loader from './Loader';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
      <h1 className="my-4">Welcome to our Fakestore!</h1>
      <button className="btn btn-primary" onClick={getData}>Get Products</button>
      {products.length === 0 ? (
        <Loader/>
      ) : (
        <div className="row">
          {products.map(product => (
            <div className="col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center" key={product.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
