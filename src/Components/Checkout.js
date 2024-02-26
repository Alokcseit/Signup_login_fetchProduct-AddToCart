import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removetocart, increase, decrease } from "../Store/CartSlice";

function Cart() {
  const dispatch = useDispatch();
  const productscart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const removecart = (id) => {
    dispatch(removetocart(id));
  };

  const HandleCheckout = () => {
    for (let i = 0; i < productscart.length; i++) {
      dispatch(removetocart(productscart[i].id));
    }
    alert("Thank you for shopping with us");
    navigate("/dashboard");
  };

  return (
    <>
      <h3>Items</h3>
      {productscart.length === 0 ? <h1>Cart is empty</h1> : null}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productscart.map((item) => (
          <div
            key={item.id}
            style={{
              width: "17rem",
              height: "500px",
              margin: "10px",
            }}
          >
            <img
              alt="Sample"
              src={item.image}
              style={{ width: "100%", height: "300px" }}
            />
            <div>
              <div tag="h5">{item.title}</div>
              <div className="mb-2 text-muted" tag="h6">
                ₹{item.price}
              </div>
            </div>
            <button onClick={() => removecart(item.id)}>
              Remove from cart
            </button>
            <button onClick={() => dispatch(decrease({ id: item.id }))}>
              -
            </button>
            {item.quantity}
            <button onClick={() => dispatch(increase({ id: item.id }))}>
              +
            </button>
          </div>
        ))}
      </div>
      <div>
        total price{" "}
        <div>
          ₹
          {productscart.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </div>
      </div>
      <button onClick={HandleCheckout}>Checkout</button>
    </>
  );
}

export default Cart;
