import React from "react";
import { post } from "../til/_types/types";

function PostForHome({ post }: { post: post }) {
  return (
    <div
      key={post.id}
      className="m-3 w-[600px] shadow-lg shadow-indigo-500/40 bg-[#e9eaf5] p-4 h-60 flex flex-col justify-between rounded-[20px]"
    >
      <div className="text-[23px]">{post.title}</div>
      <div>{post.content}</div>
      <div className="self-end text-[17px] mt-5">{post.author["name"]}</div>
    </div>
  );
}

export default PostForHome;
