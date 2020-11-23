import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friend.module.css';
const Friend = (props) => {
  return (
    <div className={classes.friendBlock}>
      <div className={classes.item}>
        <img src={props.pic}></img>
      </div>
      <span className={classes.userName}>
      <NavLink to={props.id}>
        {props.name}
      </NavLink>
        </span>
    </div>
  );
}
export default Friend;