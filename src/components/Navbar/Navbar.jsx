import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Frinds';
import classes from './Navbar.module.css';
const Navbar = (props) => {
  debugger;
  return (
    <div className={classes.nav}>
      <nav className={classes.links}>
        <div className={classes.item}>
          <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/messages" activeClassName={classes.active}>Messages</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/users" activeClassName={classes.active}>Users</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
        </div>
      </nav>
      <Friends data={props.data.friends}/>
    </div>
  );
}
export default Navbar;