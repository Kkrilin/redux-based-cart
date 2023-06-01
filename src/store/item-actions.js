import { cartActions } from "./cart-slice";
import { itemActions } from "./item-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "fetching...",
        message: "Fetching cart data",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://react-app-eed84-default-rtdb.firebaseio.com/cartitem.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        itemActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "fetched",
          message: "Fetched cart data Successfully",
        })
      );
      setTimeout(() => {
        dispatch(
          cartActions.showNotification({
            status: "success",
            title: "",
            message: "",
          })
        );
      }, 2000);
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cartItems) => {
  return async (dispatch) => {
    dispatch(
      cartActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-app-eed84-default-rtdb.firebaseio.com/cartitem.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cartItems.items,
            totalQuantity: cartItems.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };
    try {
      await sendRequest();

      dispatch(
        cartActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Send cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartActions.showNotification({
          status: "error",
          title: "Error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
