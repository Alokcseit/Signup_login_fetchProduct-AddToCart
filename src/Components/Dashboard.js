import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../Store/CartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addtoCart(product) {
    dispatch(addtocart(product));
  }

  const card = products.map((product) => (
    <div
      key={product.id}
      style={{
        width: "17rem",
        height: "500px",
        margin: "10px",
      }}
    >
      <img
        alt="Sample"
        src={product.image}
        style={{ width: "100%", height: "300px" }}
      />
      <div>
        <div tag="h5">{product.title}</div>
        <div className="mb-2 text-muted" tag="h6">
          ₹{product.price}
        </div>
        <button onClick={() => addtoCart({ ...product, id: product.id })}>
          add to cart
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <Link to="/checkout">Cart</Link>
      <div>Cart{cart.length}</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{card}</div>
    </>
  );
}

export default Products;
