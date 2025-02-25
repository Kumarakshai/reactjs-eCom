import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-comerce website is an online plateform the facilities buying and
          selling of products or services over the internet serves as a virtual
          marketplace where businesses and individual showcase their
          products,intract with customers.
        </p>
        <p>
          E-commerce websites typically display products or services a detailed
          descriptions,images,prices,and any available variations (e.g,
          sizes,colors).Each product usually has its own deticated page with
          relevent information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
