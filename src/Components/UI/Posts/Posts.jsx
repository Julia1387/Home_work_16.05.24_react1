import { data } from "../../../config/data";
import PostItem from "./PostItem";
import cls from "../Posts/Posts.module.css";
import { useState } from "react";

function Posts(props) {
  const [posts] = useState(data);

  return (
    <div className={cls.text_content}>
     <div className={cls.tem_text}>
     {posts.map((item, index) => (
        <PostItem
          username={item.username}
          phone={item.phone}
          email={item.email}
          key={index}
        />
      ))}
     </div>
    </div>
  );
}

export default Posts;
