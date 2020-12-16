import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            !localStorage.getItem("token") ? (
                // not logged in so redirect to login page with the return url
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location },
                    }}
                />
            ) : (
                // logged in so return component
                <Component {...props} />
            )
        }
    />
);

export default PrivateRoute;
