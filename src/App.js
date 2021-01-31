import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Styling
import {
  Description,
  GlobalStyle,
  ShopImage,
  ThemeButton,
  Title,
  NavProduct,
} from "./styles";
import React, { useState } from "react";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
// Components
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
import { ThemeProvider } from "styled-components";
// Data
import products from "./products";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [product, setProduct] = useState(null);
  const [_products, setProducts] = useState(products);

  const deleteProduct = (productId) => {
    const keptProducts = _products.filter(
      (product) => product.id !== productId
    );
    setProducts(keptProducts);
  };

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Link to="/">Go to Home</Link> <br></br>
      <NavProduct to="/products">Go to Products</NavProduct>
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path="/">
          <Helmet>
            <title>Home Page</title>
          </Helmet>
          <Home />
        </Route>
        <Route path="/products/:productSlug">
          <Helmet>
            <title>Product Detail Page</title>
          </Helmet>
          <ProductDetail products={products} />
        </Route>
        <Route path="/products">
          <Helmet>
            <title>Products Page</title>
          </Helmet>
          <ProductList products={_products} deleteProduct={deleteProduct} />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
