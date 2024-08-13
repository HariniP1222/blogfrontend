import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './LoginUser.css';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const submit = (e) => {
    e.preventDefault();
    axios.post('https://blogbackend-dun6.onrender.com/api/routes/login', { email }) 
      .then(result => {
        if (result.data.exists) {
          setLoginStatus('User exists. You can proceed!');
          setTimeout(() => {
            navigate('/'); // Navigate to the home page after a short delay
          }, 2000); // Delay of 2 seconds before redirecting
        } else {
          setLoginStatus('User does not exist. Please sign up.');
        }
      })
      .catch(error => {
        console.error('There was an error logging in the user!', error);
        setLoginStatus('An error occurred during login.');
      });
  }

  return (
    <div>
      <center>
        <div>
          <form onSubmit={submit} className="form">
            <h2>LOGIN</h2>
            <p>Welcome back! Please login to continue.</p>
            <div>
              <label>Email:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input id="f1"
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
            </div>
            <br></br>
            <label for="fifa">Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;
              <input id="fifa" type="password"></input>
              <br></br>
              <br></br>
              <br></br>
            <button type='submit' id="f2">Login</button>
          </form>
          
          {loginStatus && (
            <div className={`status-message ${loginStatus.includes('proceed') ? 'success' : ''}`}>
              {loginStatus}
            </div>
          )}
        </div>
      </center>
    </div>
  )
}

export default LoginUser;
