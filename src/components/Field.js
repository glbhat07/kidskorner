import React from 'react'
import { Link } from 'react-router-dom';
import './field.css'
import play from '../photos/plybtn.PNG'
import school from '../photos/lrnbtn.PNG'


function Field()
{
    return (
        <html className="fihtml">
            <body className="fibody">
                <div className="fidiv1">
                <div className="fiimg1">
               <Link to="./schoollib"> <img className="img1" src={school} /></Link> 
               
                </div>
                <div className="sclcap">
                <Link to="./schoollib">  <h1>SCHOOL</h1> </Link>
                </div>
                
                <div className="fiimg2"> 
                <Link to="./playlib"><img className="img2" src={play} /> </Link> 
                 </div> 
                 <div className="plycap">
                 <Link to="./playlib"><h1>PLAY</h1> </Link>
                </div>
                </div>

            </body>
        </html>

    );
}
export default Field;