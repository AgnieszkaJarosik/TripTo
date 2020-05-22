import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const RefreshRoute = ({ component: Component, input, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      input.end ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

const mapStateToProps = state => ({ input: state.input });

export default connect(mapStateToProps)(RefreshRoute);