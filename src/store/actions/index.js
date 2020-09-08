export const addUsers = (count) => {
  return {
    type: "COUNT_USERS",
    users: count,
  };
};

export const productId = (id) => {
  return {
    type: "PRODUCT_ID",
    product: id,
  };
};

export const cartInfo = (product) => {
  return {
    type: "PRODUCT_INFO",
    info: product,
  };
};
