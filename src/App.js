import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/item-actions";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cartVisible = useSelector((state) => state.cart.cartVisible);
  const cartItems = useSelector((state) => state.item);
  const notification = useSelector((state) => state.cart.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cartItems.changed) {
      dispatch(sendCartData(cartItems));
    }
  }, [cartItems, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
