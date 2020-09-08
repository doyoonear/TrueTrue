const userCountReducer = (state = "", action) => {
  switch (action.type) {
    case "COUNT_USERS":
      return action.users;
    case "ADD_USERS":
      return action.users;
    case "SUBTRACT_USERS":
      return action.users;
    default:
      return state;
  }
};

export default userCountReducer;
