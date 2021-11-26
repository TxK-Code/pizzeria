const INITIAL_STATE = {
  pizzas: [],
};

function pizzaReducer(state = INITIAL_STATE, action) {
  console.log("Ok Switch");
  switch (action.type) {
    case "ADD_PIZZA":
      const newArr = [...state.pizzas];
      newArr.unshift(action.payload);

      return {
        ...state,
        pizzas: newArr,
      };

    case "GET_PIZZAS": {
      return {
        ...state,
        pizzas: action.payload,
      };
    }
  }

  return state;
}

export default pizzaReducer;
