import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.item.items);
  // console.log(cartItems);
  // const isCartEmpty = !Boolean(cartItems.length);

  const cartInfo = cartItems.length ? "Your Shopping Cart" : "Cart is Empty";
  return (
    <Card className={classes.cart}>
      <h2>{cartInfo}</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={{
              id: cartItem.id,
              title: cartItem.title,
              quantity: cartItem.quantity,
              total: cartItem.totalprice,
              price: cartItem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
