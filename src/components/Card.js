import React from "react";

export default ({ images, name, caption }) => (
  <div className="card mb-4">
    <img src={images[0]} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{caption}</p>
      <button className="btn btn-primary">Add to cart</button>
    </div>
  </div>
);
