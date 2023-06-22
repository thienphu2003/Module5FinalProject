import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function ProductDetails() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (productId) {
      axios
        .get(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [productId]);

  function getProducts() {
    window.location.href = "/";
  }

  function removeProduct() {
    if (productId) {
      axios
        .delete(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
        .then((res) => {
          alert(`Remove product ${JSON.stringify(res.data)} successfully!!!`);
          window.location.href = "/";
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  return (
    <div className="container">
      <h1>Product Details</h1>
      <p>
        <b>Id:</b> {product.id}
      </p>
      <p>
        <b>Name:</b> {product.name}
      </p>
      <p>
        <b>Price:</b> {product.price}
      </p>
      <p>
        <b>Stock:</b> {product.stock}
      </p>
      <p>
        <b>Description:</b> {product.description}
      </p>
      <button type="button" className="btn btn-secondary" onClick={getProducts}>
        Back
      </button>
      <button type="button" className="btn btn-danger" onClick={removeProduct}>
        Remove
      </button>
    </div>
  );
}

export default ProductDetails;
