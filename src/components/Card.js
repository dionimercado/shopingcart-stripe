import React from "react";
import { Link } from "react-router-dom";

export default ({ id, images, name, caption }) => (
  <div className="card mb-4">
    <img src={images[0]} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{caption}</p>
      <button className="btn btn-primary">Add to cart</button>
      <Link className="btn btn-secondary" to={`/product/${id}`}>
        View
      </Link>
    </div>
  </div>
);
