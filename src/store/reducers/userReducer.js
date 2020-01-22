const initialState = {
  username: "Spencer"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_SUCCESS":
      console.log(action);
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
};
