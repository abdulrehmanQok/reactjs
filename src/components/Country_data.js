import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Country_data() {
  const [countries, setCountries] = useState([]); // Initialize as an empty array
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch countries data using fetch
  const fetchCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error("Error fetching countries:", error);
      });
  };

  // Filter countries based on search term
  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="text-center my-4">Countries</h1>
      <button onClick={fetchCountries} className="btn btn-primary mb-4">
        Load Countries
      </button>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="row">
        {filteredCountries.map(country => (
          <div className="col-md-4" key={country.cca3}>
            <div className="card mb-4">
              <img src={country.flags.png} className="card-img-top" alt={`${country.name.common} flag`} />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">
                  <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"} <br />
                  <strong>Region:</strong> {country.region} <br />
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Country_data;
