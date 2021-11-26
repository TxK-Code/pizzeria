import "./Sass/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Containers/NavBar/NavBar";
import FooterBar from "./Containers/FooterBar/FooterBar";

import Index from "./Containers/Index";
import Pizzas from "./Containers/Pizzas";
import Desserts from "./Containers/Boisson";
import Contact from "./Containers/Contact";
import Admin from "./Containers/Admin";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Index}></Route>
          <Route path="/pizzas" exact component={Pizzas}></Route>
          <Route
            path="/desserts-et-boissons"
            exact
            component={Desserts}
          ></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/admin" exact component={Admin}></Route>
        </Switch>
        <FooterBar />
      </Router>
    </>
  );
}

export default App;
