import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUser, getUserProfile } from '../../api/api';
import { isUserProfileFethcing, setUserProfile } from '../../redux/profile-reducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger;
    let userId = this.props.match.params.userId;
    if (userId == null) { userId = 2 }
    this.props.profileFethcing(true);
    getUserProfile(userId).then(response => {
      debugger;
      this.props.profileFethcing(false);
      this.props.setUserProfile(response);
    });
  }
  render() {
    return <div>
      <Profile {...this.props} profile={this.props.profile} />
    </div>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.userProfile.profile,
    fetching: state.profile.userProfile.isFetching
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) => {
      dispatch(setUserProfile(profile));
    },
    profileFethcing: (fetching) => {
      dispatch(isUserProfileFethcing(fetching));
    }
  }

}

let withUrlData = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withUrlData);