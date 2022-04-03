import React from "react";
import "./Blog.css";
import CreatePost from "./CreatePost";
import GetPosts from "./GetPosts";
import Search from "./Search";

function Blog() {
  return (
    <div className="Blog">
      <section>

        <CreatePost />
        <Search />
        <GetPosts />
      </section>
    </div>
  );
}

export default Blog;
