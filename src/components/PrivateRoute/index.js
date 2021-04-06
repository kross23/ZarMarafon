
import React from 'react'
import { Redirect, Route } from 'react-router';

const PrivataRoute = ({component:Component, ...rest}) => {
    return (
       <Route   {...rest}  render ={ props =>
        localStorage.getItem('idToken')?
        <Component {...props}/> : <Redirect to='/'/>
     }/>
    )
}

export default PrivataRoute;
