import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';

export const Header = ({startLogout}) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
      <button className="button--header" onClick={startLogout}>Sign Out</button>
      <Link className="header__title" to="/dashboard">
          <h1>Personal Planner</h1>
        </Link>
        <Link className="button--header" to="/create">Add Task</Link>
      </div>
    </div>
  </header>
);

const mapDispatchToProps =  dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);