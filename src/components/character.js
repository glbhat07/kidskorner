import React from 'react'
import { Link } from 'react-router-dom';
import './character.css'
import char1 from '../photos/char1.PNG'
import char2 from '../photos/char2.PNG'
import char3 from '../photos/char3.PNG'
import char4 from '../photos/char4.PNG'
import char5 from '../photos/char5.PNG'
import char6 from '../photos/char6.PNG'
import char7 from '../photos/char7.PNG'
import char8 from '../photos/char8.PNG'
function Char()
{
    // const moveField = () =>{

    // }
    return(
        <html className="char1">
        <body  className="chbody1" >
        <div className="chdiv1">
        <h1 style={{textAlign:"center",fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",textShadow:"solid White 2px 2px"}}> CHOOSE CHARACTER</h1>
            
        </div>
        <div className="chdiv2">
        {/* <button onClick={moveField}><img src={character} /> </button> */}
        <img src={char1} />
        <img src={char2} />
        <img src={char3} />
        <img src={char4} />
        <img src={char5} />
        <img src={char6} />
        <img src={char7} />
        <img src={char8} />
        </div>
        </body>
        </html>
    );
}
export default Char;