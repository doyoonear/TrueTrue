const productCountReducer = (state = "", action) => {
  switch (action.type) {
    case "PRODUCT_ID":
      return action.product;
    default:
      return state;
  }
};

export default productCountReducer;
