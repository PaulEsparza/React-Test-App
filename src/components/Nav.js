import React from 'react';

//npm install react-router-dom
import {
    Link,
    NavLink
  } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="btn-group">
            <NavLink to="/" className="btn btn-primary" activeClassName="active">Home</NavLink>
            <Link to="/counter" className="btn btn-primary">Counter</Link>
            <Link to="/list" className="btn btn-primary">List</Link>
        </div>
    )
}

export default Nav;
