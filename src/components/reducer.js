export const initialState = {
  basket: [],
};
const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
};
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return { ...state, basket: [...state.basket, action.payload] };

    case ACTIONS.REMOVE_FROM_CART:
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product with id: ${action.id} because it does not exist`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}
export default reducer;
