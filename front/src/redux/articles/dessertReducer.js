const INITIAL_STATE = {
  desserts: [],
};

function dessertReducer(state = INITIAL_STATE, action) {
  console.log("Ok Switch");
  switch (action.type) {
    case "ADD_DESSERT":
      const newArr = [...state.desserts];
      newArr.unshift(action.payload);

      return {
        ...state,
        desserts: newArr,
      };

    case "GET_DESSERT": {
      return {
        ...state,
        desserts: action.payload,
      };
    }
  }

  return state;
}

export default dessertReducer;
