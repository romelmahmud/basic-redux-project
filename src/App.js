import Header from "./components/Header";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="*" exact>
          Not Found
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
