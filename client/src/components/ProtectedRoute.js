import React from 'react';
// 1. make sure interface (api) is equivalent to Route
import { Route, Redirect } from 'react-router-dom';

// 2. renter <Route /> and pass props through
// 3. check if use is authenticatd, if so, it renders the Component, if not redicrects to login page.

const ProtectedRoute = ({ component: Component, ...props }) => {
    return <Route {...props} render={() => {
        if (localStorage.getItem('token')) {
            return <Component />
        } else {
            return <Redirect to='/login' />
        }
    }} />;
}

export default ProtectedRoute;