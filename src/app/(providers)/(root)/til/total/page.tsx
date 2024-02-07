"use client";

import { getPosts } from "@/app/(providers)/_utils/fetchPosts";
import React, { useEffect, useState } from "react";
import { post } from "../_types/types";
import PostForToTal from "./_components/PostForToTal";

function TotalPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTils = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    getTils();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 mt-3 grid-rows-5 w-[70%] mx-auto">
      {posts.map((post: post) => (
        <PostForToTal key={post.id} post={post} />
      ))}
    </div>
  );
}

export default TotalPage;
