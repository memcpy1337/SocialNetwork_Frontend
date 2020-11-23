import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <img src='https://bankoboev.ru/storage/avatar/bankoboev.ru-21535.jpg'></img>
              {props.text}
              <div>
          <span>like {props.likeCount}</span>
        </div>
      </div>
    </div>
  );
}
export default Post; 