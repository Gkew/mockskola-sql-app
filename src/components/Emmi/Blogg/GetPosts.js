import React, { useState } from "react";
import "./GetPosts.css";
import Axios from "axios";

const GetPosts = () => {
  const [postsList, setPostsList] = useState([]);
  const getPosts = () => {
    Axios.get("http://localhost:3001/posts").then((response) => {
      setPostsList(response.data);
    });
  };

  const deletePost = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setPostsList(
        postsList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  
  
  return (
    <div className="Posts">
      <div className="getPosts">
      <button onClick={getPosts}>Open the blog</button></div>
      {postsList.map((val, key) => {
        return (
          <div className="Blog-posts">
            <div className="Postbox">
            <div className="flex">
            <div className="title"><b>{val.title}</b></div>
            <div className="publisher"><b>{val.publisher}</b></div>
            <div className="tags"><p>{val.tags}</p></div>
            </div>
            <div className="blog-post"><p>{val.post}</p></div>
            </div>
            <button className='delPost'
            onClick={() => {
              deletePost(val.id);
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default GetPosts;
