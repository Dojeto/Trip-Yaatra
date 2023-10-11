import React from "react";
import { getSortedPostsData } from "@lib/posts";

const Posts = () => {
  const post = getSortedPostsData();
  return (
    <div>
      {post.map((ele) => {
        return <>{JSON.stringify(ele)}</>;
      })}
    </div>
  );
};

export default Posts;
