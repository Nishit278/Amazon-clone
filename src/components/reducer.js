export const initialState = {
  basket: [],
};
const ACTIONS = {
  ADD_TO_CART: "add-to-cart",
  REMOVE_FROM_CART: "remove-from-cart",
};
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return { ...state, basket: [...state.basket, action.payload] };
      break;
    case ACTIONS.REMOVE_FROM_CART:
      return { state };
      break;
    default:
      return state;
  }
}
export default reducer;
