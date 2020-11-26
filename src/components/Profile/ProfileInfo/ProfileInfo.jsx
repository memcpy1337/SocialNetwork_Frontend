import React from 'react';
import Preloader from '../../common/Preloader/Preloader.jsx';
import classes from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
  debugger;
  if (props.fetching)
  {
    return <Preloader />
  }
  debugger;
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <div className={classes.profilePhoto}>
          <img src={props.profile.photoUrl}></img>
        </div>
        <div className={classes.userInfo}>
          <span>{props.profile.name}</span>
          <div className={classes.item}>
            {
              props.lookingForAJob ? <span className={classes.lookingTrue}>I am looking for a job</span> : <span className={classes.lookingFalse}>I am NOT looking for a job</span>
            }
          </div>
          <div className={classes.item}>
            {props.profile.lookingForAJobDescription}
          </div>
          <div className={classes.item}>
            {props.profile.contacts}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileInfo;