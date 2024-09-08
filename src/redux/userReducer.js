const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      return {
        ...state,
        user: state.user.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
