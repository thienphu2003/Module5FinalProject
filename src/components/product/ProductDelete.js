import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

function ProductDelete() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

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
  function cancleHandle() {
    window.location.href = "/";
  }

  function removeProduct() {
    let check = window.confirm("Are you sure you want to delete !!!!");
    if (productId && check) {
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
      <div className="card">
        <div className="card-body">
          <p className="card-text">
            <b>Id:</b> {product.id}
          </p>
          <p className="card-text">
            <b>Name:</b> {product.name}
          </p>
          <p className="card-text">
            <b>Price:</b> {product.price}
          </p>
          <p className="card-text">
            <b>Stock:</b> {product.stock}
          </p>
          <p className="card-text">
            <b>Description:</b> {product.description}
          </p>
          <span style={{ display: 'flex', justifyContent:'space-between',alignContent:'center'}}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={getProducts}
            >
              Back
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={removeProduct}
            >
              Remove
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={cancleHandle}
            >
              Cancel
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductDelete;
