import React from 'react'
import img1 from '../images/abc_products.png';
import img2 from '../images/hrc_logo.png';
import './style.css';

const Header = (props) => {
  return (
  <div style={{ margin: "1.5rem" }}>
    <div className="image1">
      <img alt='abc_products'  src={img1} />
    </div>
    <div className="image2">
      <img alt='hrc_logo' style={{ marginLeft: "10rem" }} src={img2} />
    </div>
  </div>
  );
}

export default Header