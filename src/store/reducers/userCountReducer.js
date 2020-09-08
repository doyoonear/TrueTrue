const userCountReducer = (state = "", action) => {
  switch (action.type) {
    case "COUNT_USERS":
      return action.users;
    case "ADD_USERS":
      return { count: action.users + 1 };
    case "SUBTRACT_USERS":
      return action.users;
    default:
      return state;
  }
};

export default userCountReducer;
