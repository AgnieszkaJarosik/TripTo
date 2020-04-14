import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';

import Nav from "components/Nav";
import Footer from "components/Footer";
import MapPage from "pages/MapPage";
import RestaurantsPage from "pages/RestaurantsPage";
import HomePage from "pages/HomePage";

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    font-family: 'Open Sans', sans-serif;

    .wrapper {
      min-height: 100vh;
    }
  }
`;

const App = () => (
  <Router>
    <div className="wrapper">
      <Nav />
        <Route exact path="/" component={HomePage} />
        <Route path="/map" component={MapPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
    </div>
    <Footer> © 2020  </Footer>
    <GlobalStyle />
  </Router>
);

export default App;
