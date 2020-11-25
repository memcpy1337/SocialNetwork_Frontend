import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
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
    Axios.get('https://localhost:44364/api/users/GetUserProfile/id=2').then(response => {
      debugger;
      this.props.setUserProfile(response.data);
    });
  }
  render() { return <div>
      <Profile {...this.props} profile={this.props.profile}/>
    </div>
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profile.userProfile
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) => {
      dispatch(setUserProfile(profile));
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);