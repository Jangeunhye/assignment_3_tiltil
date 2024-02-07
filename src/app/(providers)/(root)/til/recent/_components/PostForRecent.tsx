import React from "react";
import { post } from "../../_types/types";

function PostForRecent({ post }: { post: post }) {
  return (
    <div
      key={post.id}
      className=" shadow-lg shadow-indigo-500/40 bg-[#e9eaf5] p-4 h-60 flex flex-col justify-between rounded-[20px]"
    >
      <div>
        <div className="text-[23px]">{post.title}</div>
        <div className="text-[17px] mt-5">{post.content}</div>
      </div>

      <div className="self-end text-[17px]	">{post.author["name"]}</div>
    </div>
  );
}

export default PostForRecent;
