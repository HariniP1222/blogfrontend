
import React from "react";
import './web.css';
import { Navigate, useNavigate } from "react-router-dom";
function Header()
{
    const navigate = useNavigate(); // Initialize useNavigate

    const handleWelcomeClick = (e) => {
        e.preventDefault();
        navigate('/main'); // Use navigate instead of history.push
    };
    return(
        <>
        <div class="h">
            
            <ul>
                <li><h1>Connect</h1></li>
                <li><h1>Coach</h1></li>
                <li><h1>Care</h1></li>
            </ul>

        </div>
       <div class="img">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <center>
            <a href="/main" onClick={handleWelcomeClick}><h1>WELCOME</h1></a>
            <br></br><br></br><br></br>
            <p id="kc">Transform Your Body, Transform Your Life</p>
            </center>   
       </div>
       </>
    )
}
export default Header;