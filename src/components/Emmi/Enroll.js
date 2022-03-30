import React from 'react'
import './Enroll.css'
import { Link } from 'react-router-dom'

function Enroll() {

  return (
    <div className='main-content'>

    <div className='box1'> <h2>Kurs 1</h2>
    <div className='title'><h3>Title</h3></div>
    <div className='info'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
    doloremque. Quaerat provident commodi consectetur veniam similique ad 
    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
    quasi aliquam eligendi, placeat qui corporis!</p>
    </div>
    <div className='apply'>
    <button> <Link to="/course1">Apply</Link></button></div>
    </div>
    
    <div className='box2'><h2>Kurs 2</h2>
    <div className='title'><h3>Title</h3></div>
    <div className='info'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
    doloremque. Quaerat provident commodi consectetur veniam similique ad 
    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
    quasi aliquam eligendi, placeat qui corporis!</p>
    </div>
    <div className='apply'>
    <button> <Link to="/course2">Apply</Link></button></div>
    </div>

    <div className='box3'><h2>Kurs 3</h2>
    <div className='title'><h3>Title</h3></div>
    <div className='info'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
    tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
    quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
    sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
    recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
    minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
    quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
    fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
    consequuntur! Commodi minima excepturi repudiandae velit hic maxime
    doloremque. Quaerat provident commodi consectetur veniam similique ad 
    earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
    fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
    suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
    modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
    totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
    quasi aliquam eligendi, placeat qui corporis!</p>
    </div>
    <div className='apply'>

    <button> <Link to="/course3">Apply</Link></button></div>
      </div>
    </div>
  )
}

export default Enroll