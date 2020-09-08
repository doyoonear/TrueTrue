const cartInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case "PRODUCT_INFO":
      return action.info;
    default:
      return state;
  }
};

export default cartInfoReducer;
