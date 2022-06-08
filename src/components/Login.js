import React from 'react'
import { Link } from 'react-router-dom';
import './login.css';
import logo from '../photos/user4.png'



function Login() {
    return(
        <html className="login">
        <body style={{position:"absolute"}} className="div1">
        <div className="div-2a">
        <br />
        <img src={logo} height="150" width="150"/>
        <form action="" method="POST">
            <br />
            <input type="" name="email" placeholder="Email" required />
            <br /><br />
            <input  type="password" name="password" placeholder="Password" />
            <br /><br />
            <input style={{width: 75,background:"blue" }} name="loginbtn" type="submit" value="Login" />
            <br />
            </form>
            <p>
                <br/>
                <b>Forgot password? &nbsp;</b> <Link  className="btn btn-warning ms-3" >click</Link>

            <br/><br/>
            
                
                { <p><b>New registration? &nbsp;</b>  <Link className="btn btn-success ms-3" to="/register">click</Link></p> }
                
            </p>
        
    </div>
    </body>
    </html>
    )
}
export default Login;