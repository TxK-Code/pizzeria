import axios from "axios";

export const GET_PIZZAS = "GET_PIZZAS";

export const getPizzas = () => {
  return (dispatch) => {
    console.log("Ok Axios");
    return axios
      .post("http://localhost:3001/api/pizzas")
      .then((res) => {
        console.log(res, "<== Res");
        dispatch({ type: "GET_PIZZAS", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getBoisson = () => {
  return (dispatch) => {
    console.log("Ok Axios");
    return axios
      .post("http://localhost:3001/api/boissons")
      .then((res) => {
        console.log(res, "<== Res");
        dispatch({ type: "GET_BOISSON", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getDessert = () => {
  return (dispatch) => {
    console.log("Ok Axios");
    return axios
      .post("http://localhost:3001/api/desserts")
      .then((res) => {
        console.log(res, "<== Res");
        dispatch({ type: "GET_DESSERT", payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
