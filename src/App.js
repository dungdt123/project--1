import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Headers from './components/Header';
import Menu from './components/Menu';
import Home from './components/Home';
import Products from './components/Products';
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import swal from 'sweetalert';
import { useState, useEffect } from 'react';


function App() {
  // Khởi tạo state
  const [products, setProduct] = useState([]);
  const API = 'http://localhost:3001/products';
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, []);
  const onDeleteProduct = (id) => {
    fetch(`${API}/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        swal("Good job!", "Đã delete thành công", "success")
      })
      .catch((error) => {
        swal("!", "Failed", "error")
      });
    const newProduct = products.filter(post => post.id !== id); // sinh mảng mới không bao gồm ID vừa click
    setProduct(newProduct)
  }

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
            <Products products={products} deleteProduct={onDeleteProduct} />
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
