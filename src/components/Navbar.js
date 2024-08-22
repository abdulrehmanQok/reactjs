import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <i class="fa-sharp fa-solid fa-mug-saucer"></i>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li> 
        <li className="nav-item">
          <Link className="nav-link" to="/form">Todo_App</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/WeatherApp">WeatherApp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Country_data">Country_data</Link>
        </li>
      
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Singup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Product">Product</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar