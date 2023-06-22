import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Products() {
    const PRODUCT_MANAGEMENT_API = "http://localhost:3001";
    const { productId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(products.length===0)
        {
        axios
            .get(`${PRODUCT_MANAGEMENT_API}/products`)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                throw err;
            });}
    }, [products, productId]);

    function handleCreate() {
        window.location.href = "/product/add";
    }

    return (
        <div className="container">
        <h1>Products</h1>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th colspan="2">
                        <button type="button" className="btn btn-primary" onClick={handleCreate}>
                            Create
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td><Link to={`/product/${product.id}`}>{product.name}</Link></td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.description}</td>   
                        <td>
                            <a href={`/product/edit/${product.id}`} className="btn btn-info">Update</a> 
                        </td>
                        <td>
                            <a href={`/product/delete/${product.id}`} className="btn btn-danger">Delete</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
        );
}

export default Products;

