import React from 'react';
import { postActionCreator, updatePostTextActionAcreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
  debugger;
  let postDataArr = props.posts.map(p => <Post text={p.message} likeCount={p.likesCount} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={ onPostChange }></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>
        {
          postDataArr
        }
      </div>
    </div>
  );
}
export default MyPosts;  