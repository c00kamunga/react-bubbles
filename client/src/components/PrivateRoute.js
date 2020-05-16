import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: component, ...rest }) => {
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <component {...props} />
      ) : (
        <Redirect to="/Login" />
      )
    }
  />;
};

export default PrivateRoute;