import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Headers from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Product from './components/Product';
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Headers />
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
