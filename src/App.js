import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from 'styled-components';

import configureStore from "./redux/configureStore";
import {Provider as ReduxProvider} from "react-redux";

import MapPage from "pages/MapPage";
import ListPage from "pages/ListPage";
import HomePage from "pages/HomePage";
import PlacePage from "pages/PlacePage";
import NotFoundPage from "pages/NotFoundPage";

import Nav from "components/Nav";
import Footer from "components/Footer";

import GlobalStyle from "components/GlobalStyle";

const Wrapper = styled.div`
  width: 100vw;
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

const store = configureStore();

const App = () => (
  <ReduxProvider store={store}>
    <Router>
      <Wrapper>
        <span><Nav /></span>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/map" component={MapPage} />
            <Route path="/restaurants" component={ListPage} />
            <Route path="/sights" component={ListPage} />
            <Route path="/place" component={PlacePage} />
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