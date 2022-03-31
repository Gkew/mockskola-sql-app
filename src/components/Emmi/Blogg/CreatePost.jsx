import React, {useState} from 'react'
import './CreatePost.css'
import Axios from 'axios'

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [publisher, setPublisher] = useState("")
    const [post, setPost] = useState("")
    const [tags, setTags] = useState("")
    const [postsList, setPostsList] = useState([]);

    const addPost = (e) => {
        Axios.post("http://localhost:3001/createPost", {
            title: title,
            publisher: publisher,
            post: post,
            tags: tags,
        }).then(() => {
          setPostsList([
            ...postsList,
            setTitle(""),
            setPost(""),
            setTags(""),
            {
                title: title,
                publisher: publisher,
                post: post,
                tags: tags,
            },
          ]);
        });
      };

  return (
    <div className='create-content'>
    <form>
    <div className='Title'><h2>Publish into space</h2></div>
    <label>Title: </label>
    <input type="text" required  onChange={(event) => { setTitle(event.target.value)}}/>
    <label>Publisher: </label>
    <input type="text" required onChange={(event) => { setPublisher(event.target.value)}}/> 
    <label> What's on your mind? </label> 
    <textarea maxlength="1000" rows="12" cols="41" required  onChange={(event) => { setPost(event.target.value)}}/>
    <label> Add your #tags </label> 
    <input type="text" onChange={(event) => { setTags(event.target.value)}}/>
   
    <button className="addBtn" onClick={addPost}>Send</button>
    </form>

    </div>
  )
}

export default CreatePost