import "./App.css";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import Shop from "./Screens/Shop";
import Product from "./Screens/product";
import Header from "./Components/Header";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/product">
            <Header />
            <Categories />
            <Product />
            <Footer />
          </Route>
          <Route path="/shop">
            <Header />
            <Categories />
            <Shop />
            <Footer />
          </Route>
          <Route path="/cart">
            <Header />
            <Categories />
            <Cart />
            <Footer />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <Header />
            <Categories />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
