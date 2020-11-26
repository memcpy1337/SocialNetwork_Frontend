import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo profile={props.profile} fetching={props.fetching}/>
      <MyPostsContainer />
    </div>
  );
}
export default Profile;