import React from "react";
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
           <div className="box1">
           <b>Spaceforce</b>
           <small>Deathstar 2,

           <br /> Milkyway 2022</small></div>
           <div className="box2"><b>Astronauts in charge:</b>
           <small>Space sailor Emmi</small>
           <small>Space sailor Axel</small>
           <small>Space sailor Markus</small></div>
           <div className="box3"> <a href="https://github.com/Gkew/spaceforce-sql-app.git" target="_blank">
           <i
             className="fa-brands fa-github fa-2xl"
             style={{ color: "white" }}
           ></i>
         </a></div>
        </div>
    )   
}

export default Footer