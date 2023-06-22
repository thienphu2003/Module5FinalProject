import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/product/Products';
import ProductDetails from './components/product/ProductDetails';
import ProductAdd from './components/product/ProductAdd';
import ProductDelete from './components/product/ProductDelete';
import ProductEdit from './components/product/ProductEdit';




function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Products/>} ></Route>
    <Route path={`/product/:productId`} element={<ProductDetails />} />
    <Route path={"/product/add"} element={<ProductAdd/>} />
    <Route path={`/product/delete/:productId`} element={<ProductDelete />} />
    <Route path={`/product/edit/:productId`} element={<ProductEdit />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
