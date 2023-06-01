import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.item.totalQuantity);
  const dispatch = useDispatch();

  const cartShowHandler = () => {
    dispatch(cartActions.showCart());
  };

  return (
    <button onClick={cartShowHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
