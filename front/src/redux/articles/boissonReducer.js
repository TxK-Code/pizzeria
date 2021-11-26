const INITIAL_STATE = {
  boissons: [],
};

function boissonReducer(state = INITIAL_STATE, action) {
  console.log("Ok Switch");
  switch (action.type) {
    case "ADD_BOISSON":
      const newArr = [...state.boissons];
      newArr.unshift(action.payload);

      return {
        ...state,
        boissons: newArr,
      };

    case "GET_BOISSON": {
      return {
        ...state,
        boissons: action.payload,
      };
    }
  }

  return state;
}

export default boissonReducer;
