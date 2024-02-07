"use client";

import { useEffect, useState } from "react";
import { getPosts } from "../_utils/fetchPosts";
import { post } from "./til/_types/types";
import PostForHome from "./_components/PostForHome";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTils = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    getTils();
  }, []);

  return (
    <div className="flex flex-wrap m-4 justify-center">
      {posts.map((post: post) => (
        <PostForHome key={post.id} post={post} />
      ))}
    </div>
  );
}

export default HomePage;
