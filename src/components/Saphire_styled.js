import React from 'react';
import './Saphire_styled.css';

const Saphire_styled = () => {
  return (
    <div className='card-container'>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-accessories_7ae208fe-1be3-4922-add6-3b7956108ce1.jpg?v=1721296694&width=400" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">ACCESSORIES</h5>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-kids_fe3a6287-800c-4e7a-acbf-e2c08776791b.jpg?v=1723112862&width=400" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">KID</h5>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-fragrance.jpg?v=1723112862&width=400" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">BEAUTY</h5>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://pk.sapphireonline.pk/cdn/shop/files/sbc-_-modest.jpg?v=1723718648&width=400" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">MODEST WEAR</h5>
        </div>
      </div>
    </div>
  );
}

export default Saphire_styled;
