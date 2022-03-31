import React from "react";
import './Footer.css'
import Logo from '../Header/img/7057097803_23d4116a-e0e7-4e4e-9f9b-07d8b10705dc.png'
function Footer() {
    return (
        <div className="footer">
           <div className="box1">
           <b>Spaceforce</b>
           <small>Deathstar 2,
           <br /> Milkyway 2022</small>
           </div>
           <div><img src={Logo} style={{width: '250px', marginTop: '7%'}} alt="Spaceforce-logo"/></div>
           <div className="box2"><b>Astronauts in charge:</b>
           <small>Space sailor Emmi</small>
           <small>Space sailor Axel</small>
           <small>Space sailor Markus</small></div>
          

        </div>
    )      
}

export default Footer