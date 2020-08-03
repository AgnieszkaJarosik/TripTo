import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const RefreshRoute = ({ component: Component, ...rest }) => {
  const trip = useSelector(state => state.trip);

  return (
    <Route
      {...rest}
      render={props =>
        trip.end ? (
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
}

// const mapStateToProps = state => ({ input: state.input });
//
// export default connect(mapStateToProps)(RefreshRoute);

export default RefreshRoute;
