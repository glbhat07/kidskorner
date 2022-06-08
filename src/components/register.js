import React from 'react'
import logo from '../photos/user5.png'
import './register.css';

function Register() {
    return(
        <html className="register">
        <body style={{position:"absolute"}}className="register1">
        <div className="div-2">
        <br />
        <img src={logo} className="logo1"/>
        <form action="" method="POST">
            <br />
            <input type="" name="nam" placeholder="Full name" required />
            <br /><br />
            <input type="" name="email" placeholder="Email" required />
            <br /><br />
            <input type="" name="phnum" placeholder="Phone number" required />
            <br /><br />
            <input type="password" name="password" placeholder="Password" />
            <br /><br />
            <input type="password" name="password" placeholder="Confirm Password" required />
            <br /><br />
            <input style={{width: 75,background:"blue" }} name="registerbtn" type="submit" value="Register" />
            <p>
            <br/>
                <b>Already registered?</b><a href="./login">Click here</a>
            </p>
        </form>
    </div>
    </body>
    </html>
    )
}
export default Register;