import React from 'react'
import { Link } from 'react-router-dom';
import './schoollib.css'
import video from '../photos/video.png'
import visler from '../photos/visuallearn.png'
import rhyme from '../photos/rhyme.png'
import books from '../photos/books.png'
import letter from '../photos/letter.png'
import science from '../photos/science.png'
import history from '../photos/history.png'



function Lib()
{
    return(
        <html className="sclib">
        <body className="sclibbody" >
        <div className="sclibdiv1">
        <h1 style={{textAlign:"center"}}> LIBRARY</h1>
        </div>
        <div className="sclibdiv2">
            <figure><img src={video} /><figcaption>MATH </figcaption></figure>
            <figure><img src={science} /><figcaption>SCIENCE</figcaption></figure>
            <figure><img src={history} /><figcaption>HISTORY</figcaption></figure>
            <figure><img src={books} /><figcaption>BOOKS</figcaption></figure>
            <figure><img src={letter} /><figcaption>LETTERS</figcaption></figure>
            <figure><img src={visler} /><figcaption>LOGIC</figcaption></figure>
        </div>
        </body>
        </html>
    );
}
export default Lib;