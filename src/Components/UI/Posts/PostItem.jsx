import React from "react";
import cls from "../Posts/Posts.module.css";

function PostItem(props) {
  const { username, phone, email } = props;
  return (
    <div className={cls.item__text}>
      <div className={cls.text__block}>
      <p>username: {username}</p>
      <p>phone: {phone}</p>
      <p>email: {email}</p>
      </div>
    </div>
  );
}

export default PostItem;
