// reducer.js
const initialState = {
    value: 0,
    price:0
  };
  function change(state = initialState, action) {
    switch (action.type) {
      case "increment":
        return { ...state, value: state.value + 1 };
      case "total":
        return {...state, price:state.price + action.payload}
      default:
        return state;
    }
  }
  export default change;