import React, { Component } from "react";
import axios from "axios";
import Loading from "../components/Loading";

export default class Product extends Component {
  state = {
    product: { images: [] },
    variations: [],
    loading: true
  };

  componentDidMount = () => {
    this.fetchProduct();
  };

  fetchProduct = async () => {
    const productId = this.props.match.params.productId;
    console.log({ productId });

    const { data } = await axios.get(
      "https://stripe.myawstester.com/v1/products/" + productId
    );
    const { data: variations } = await axios.get(
      `https://stripe.myawstester.com/v1/products/${productId}/variations`
    );

    this.setState({ product: data, variations, loading: false });

    // setProducts(data);
  };

  render() {
    const { product, variations, loading } = this.state;
    console.log(product);
    return (
      <>
        {loading ? (
          <div
            className="w-100 d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Loading />
          </div>
        ) : (
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-7">
                <img
                  className="img-fluid"
                  src={product.images[0]}
                  alt={product.name}
                />
              </div>
              <div className="col-md-5">
                <h3 className="display-4">{product.name}</h3>
                <strong className="text-success d-block mb-4">
                  ${variations[0].price}
                </strong>
                <p>{product.description}</p>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="1"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary">Add to cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
