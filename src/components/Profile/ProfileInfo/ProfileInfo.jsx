import React from 'react';
import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photoUrl}></img>
    ava + description
        </div>
    </div>
  );
}
export default ProfileInfo;