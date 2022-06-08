import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import decpic from '../photos/decpic.png'


function Home()
{
    return(
        <html className="home1">
        <body className="hbody1" >
        <div className="hdiv1">
        <img src={decpic}  />
            
        </div>
        <h1 style={{textAlign:"center"}}> <a href='./login'> KIDZ CORNER </a></h1>
        
        </body>
        </html>
    );
}
export default Home;