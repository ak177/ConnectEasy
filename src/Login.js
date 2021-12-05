import React, { useState } from 'react';
import "./login.css"
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import App from './App';

const clientId = "122636136649-a0djmu12vanl0mh0q28f1q1d3dj380ir.apps.googleusercontent.com";

function Login() {


    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    const [name, setname] = useState("")
    // let name="You";
    const onLoginSuccess = (res) => {
         let newname=res.profileObj.givenName;
        console.log(name);
        setname(newname)
        
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };
    console.log(name);

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

     const handleLogn=(val)=>{
         setShowloginButton(val);
         setShowlogoutButton(!val);

     }
     const handleLogt=(val)=>{
        console.log(val);
     }

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                className='g-signin'
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
            <App handlelogin={showloginButton} handlelogout={showlogoutButton} login={handleLogn} logout={handleLogt} name={name}/>:null
                // <GoogleLogout
                //     clientId={clientId}
                //     buttonText="Sign Out"
                //     onLogoutSuccess={onSignoutSuccess}
                // >
                // </GoogleLogout> : null
                // // <App/>:null

            }
        </div>
    );
}
export default Login;