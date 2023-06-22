import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

function ProductAdd() {
  const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
  const { productId } = useParams();
  const isCreate = !productId;
  const [product, setProduct] = useState({});


  useEffect(() => {
    if (productId) {
      axios
      .get(`${PRODUCT_MANAGEMENT_API}/products/${productId}`)
      .then(res => {
          setProduct(res.data);
      })
      .catch(err => {
        throw err;
      });
    }
  }, [productId]);

  function handleChange(event) {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit() {
    axios
      .post(`${PRODUCT_MANAGEMENT_API}/products`, product)
      .then(res => {
        alert(
          `${isCreate ? "Create" : "Edit"} product ${JSON.stringify(
            res.data
          )} successfully!!!`
        );
        window.location.href = "/";
      })
      .catch(err => {
        throw err;
      });
  }

  return (
    <div className="container">
    <h1>Product Add</h1>
    <form>
      <div className="form-group">
        <label for="name">Name</label>
        <input className="form-control" name="name" value={product.name || ""} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label for="price">Price</label>
        <input className="form-control" name="price" value={product.price || ""} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label for="stock">Stock</label>
        <input className="form-control" name="stock" value={product.stock || ""} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label for="description">Description</label>
        <input className="form-control" name="description" value={product.description || ""} onChange={handleChange} />
      </div>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Add
      </button>
    </form>
  </div>
  
  );
}

export default ProductAdd;