import React from "react";
import Card from "./Card";

export default ({ products }) => (
  <div className="container">
    <div className="row">
      {products.map((p, key) => (
        <div key={key} className="col-md-4">
          <Card {...p} />
        </div>
      ))}
    </div>
  </div>
);
