import React, {useState} from 'react'
import './Blog.css'
import CreatePost from './CreatePost'
import GetPosts from './GetPosts'


function Blog() {
  return (
    <div className='Blog'>
    <section>
<CreatePost />
<GetPosts />
    </section>
    
    </div>
  )
}

export default Blog