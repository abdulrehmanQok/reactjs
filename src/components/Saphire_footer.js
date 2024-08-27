import React from 'react'

const Saphire_footer = () => {
  return (
    <div>
   <footer className="bg-dark text-light py-4">
  <div className="container">
    <div className="row">
      {/* Company Information */}
      <div className="col-md-4">
        <h5>Company Name</h5>
        <p>© 2024 All rights reserved.</p>
        <p>Providing quality services since 2024.</p>
      </div>
      {/* Quick Links */}
      <div className="col-md-4">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="#" className="text-light">Home</a></li>
          <li><a href="#" className="text-light">About Us</a></li>
          <li><a href="#" className="text-light">Services</a></li>
          <li><a href="#" className="text-light">Contact Us</a></li>
        </ul>
      </div>
      {/* Contact Information */}
      <div className="col-md-4">
        <h5>Contact Us</h5>
        <p>Email: info@company.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 1234 Street Name, City, State</p>
      </div>
    </div>
  </div>
</footer>


      
    </div>
  )
}

export default Saphire_footer
