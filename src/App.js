import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import store from "./store";
import {Provider as ReduxProvider} from "react-redux";

import RefreshRoute from "./pages/RefreshRoute";
import MapPage from "pages/MapPage";
import PlacesPage from "pages/PlacesPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import HomePage from "pages/HomePage";
import PlacePage from "pages/PlacePage";
import NotFoundPage from "pages/NotFoundPage";

import Nav from "components/Nav";
import Footer from "components/Footer";

import GlobalStyle from "components/GlobalStyle";

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 4rem auto 4rem;
  grid-template-columns: 1fr;
  
  ~ span {
    grid-row: 1/2;
    grid-column: 1/2;
  }

  ~ div {
    grid-row: 2/3;
    grid-column: 1/2;
    min-height: 80%;
  }

  ~ ${Footer} {
    grid-row: 3/4;
    grid-column: 1/2;
  }
`;

const App = () => (
  <ReduxProvider store={store}>
    <Router>
      <Wrapper>
        <span><Nav /></span>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <RefreshRoute path="/map" component={MapPage} />
            <RefreshRoute path="/restaurants" component={RestaurantsPage} />
            <RefreshRoute path="/sights" component={PlacesPage} />
            <RefreshRoute path="/place" component={PlacePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer> © 2020  </Footer>
      </Wrapper>
      <GlobalStyle />
    </Router>
  </ReduxProvider>
);

export default App;
