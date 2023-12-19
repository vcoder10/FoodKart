import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  const delFee = 60;

  const dispatch = useDispatch();
  const removeItemCart = (id) => {
    dispatch(removeItem(id));
  };
  const checkOut = () => {
    dispatch(clearCart());
    alert("Ordered Successfully");
  };

  if (cartItems.items.length === 0)
    return <h1 className="empty">"Cart is Empty"</h1>;
  return (
    <div className="cart-main">
      <div className="cart-items">
        {cartItems.items.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.itemName}</span>
            <span>{item.itemPrice}</span>
            <button onClick={() => removeItemCart(item.itemId)}>remove</button>
          </div>
        ))}
      </div>
      <div className="order-details">
        <h3>Order Details</h3>
        <div className="cart-total">
          <span> Total</span>
          <span>Rs.{cartItems.totalPrice.toFixed(2)}</span>
        </div>
        <div className="cart-total">
          <span>Coupon</span>
          <span style={{ color: "green" }}>
            -Rs{(cartItems.totalPrice / 10).toFixed(2)}
          </span>
        </div>
        <div className="cart-total">
          <span> Delevery Fee</span>
          <span>Rs.{delFee}</span>
        </div>
        <div className="cart-total">
          <span> Amount Payable</span>
          <span>
            Rs.
            {(
              cartItems.totalPrice +
              delFee -
              cartItems.totalPrice / 10
            ).toFixed(2)}
          </span>
        </div>
        <button className="checkout-btn" onClick={checkOut}>
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default Cart;
