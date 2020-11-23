import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Frind';
import classes from './Friends.module.css';
const Friends = (props) => {
  let frindsArr = props.data.map(user => {
    return <Friend pic={user.pic} name={user.name} id={user.id} />
  });
  return (
    <div className={classes.friends}>
      <h3 className={classes.headerText}>Friends</h3>
      <div className={classes.friendsBar}>
        {
          frindsArr
        }
      </div>
    </div>
  );
}
export default Friends;