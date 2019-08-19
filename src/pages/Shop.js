import React, { Component } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Notice from "../components/Notice";
import Catalog from "../components/Catalog";

export default class Shop extends Component {
  state = {
    products: [],
    loading: true
  };

  componentDidMount = () => {
    this.fetchProducts();
  };

  fetchProducts = async () => {
    const { data } = await axios.get(
      "https://stripe.myawstester.com/v1/products/"
    );

    this.setState({ products: data, loading: false });

    // setProducts(data);
  };
  render() {
    const { products, loading } = this.state;
    return (
      <>
        <h1 className="text-center my-5 display-4">Shop page</h1>
        {loading ? (
          <Loading />
        ) : products.length === 0 ? (
          <Notice type="warning">No products found</Notice>
        ) : (
          <Catalog products={products} />
        )}
      </>
    );
  }
}
