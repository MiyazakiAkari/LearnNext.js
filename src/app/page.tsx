"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
  userId: number;
};

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("./app/api/posts.ts"); // APIエンドポイント
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={"/"}>
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">
      </Link>
    </div>
  );
};

export default HomePage;
