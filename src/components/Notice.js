import React from "react";

export default ({ type, children }) => (
  <div className={`alert alert-${type}`}>{children}</div>
);
