import React from 'react';
import { connect } from 'react-redux';
import { postActionCreator, updatePostTextActionAcreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  }
}
const mapDispatchStore = (dispatch) => {
  return {
    updateNewPostText: (text) => { dispatch(updatePostTextActionAcreator(text)) },
    addPost: () => { dispatch(postActionCreator()) }
  }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchStore)(MyPosts);

export default MyPostContainer;