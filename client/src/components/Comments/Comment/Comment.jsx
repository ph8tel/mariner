import React from 'react';
import moment from 'moment';
import classes from './Comment.css';
import UserIconLight from '../../../../assets/user-circle.svg';
import composeIcon from '../../../../assets/pen-square.svg';

const comment = (props) => (
  <div className={classes.Comment}>
    <input type="checkbox" onChange={props.replyAll}>
    </input>
    <img src={UserIconLight} className={classes.userIcon}></img>
    <p className={classes.userName}>{props.comment.author || "Username"} </p>
    <p className={classes.commentText}>{props.comment.comment || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel molestie libero, ut varius nulla. Pellentesque eleifend nunc eu vulputate fermentum. "}</p>
    <p className={classes.commentTime}>{moment(props.comment.timestamp).calendar() || "Today, 2:04PM"}</p>
    <button onClick={props.passComment}> Single Reply
    </button>
    <button onClick={props.renderReplyAll}> Reply to Checked
    </button>
    {/* <img src={composeIcon} className={classes.composeIcon}></img> */}
  </div>
);

export default comment;