import React from 'react'
import { Link } from 'react-router-dom';
import './playlib.css'
import game4 from '../photos/game4.png'
import game3 from '../photos/game3.png'
import game2 from '../photos/game2.png'
import game1 from '../photos/game1.png'
import puzzle from '../photos/puzzle.png'
import draw from '../photos/draw.png'



function Lib()
{
    return(
        <html className="pllib">
        <body className="pllibbody" >
        <div className="pllibdiv1">
        <h1 style={{textAlign:"center"}}> LIBRARY</h1>
        </div>
        <div className="pllibdiv3">
        <div className="pllibdiv2">
            <figure><img src={draw} /><figcaption>DRAW </figcaption></figure>
            <figure><img src={puzzle} /><figcaption>PUZZLE</figcaption></figure>
            <figure><img src={game1} /><figcaption>GAME1</figcaption></figure>
            <figure><img src={game2} /><figcaption>GAME2</figcaption></figure>
            <figure><img src={game3} /><figcaption>GAME3</figcaption></figure>
            <figure><img src={game4} /><figcaption>GAME4</figcaption></figure>
        </div>
        </div>
        </body>
        </html>
    );
}
export default Lib;