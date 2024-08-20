import React from 'react';
import { products } from '../data/data'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Slidebar from '../components/Slidebar';

const Products = () => {

  return (

    <div className="container mt-4">
    <Slidebar />
      <div className="row">
        {products.map((product, index) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4" 
            key={index}
          >
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top img-fluid" 
                alt={product.name}
              />
              
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">Quantity: {product.quantity}</p>
                <p className="card-text">{product.description}</p> {}
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;