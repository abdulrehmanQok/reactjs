import React from 'react';
import { Link } from 'react-router-dom';

const Saphirenav2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">NEW IN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">WOMAN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">MAN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">KIDS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">BEAUTY</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">ACCESORIES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">THE EDIT</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Saphirenav2;
