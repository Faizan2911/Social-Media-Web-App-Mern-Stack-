import React from 'react';
import './Auth.css';
import Logo from '../../Img/logo.png';

const Auth = () => {
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h2>Welcome !</h2>
                    <h5>Explore the ideas throughout <br /> the world.</h5>
                </div>
            </div>
            <LogIn />
        </div>
    )
}



function LogIn() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">

                <h2>Log In</h2>

                <div>
                    <input type="text" placeholder="Email" className="infoInput"
                        name="email"  />
                </div>

                <div>
                    <input type="password" className="infoInput" placeholder="Password"
                        name="password" />
                </div>

                <div>
                    <span style={{ fontSize: "13px" }}> Don't have an account? Sign Up </span>
                    <button className="button infoButton">Login</button>
                </div>

            </form>
        </div>
    );
}




function SignUp() {
    return (
        <div className="a-right">
            <form className='infoForm authForm'>

                <h2>Sign Up</h2>

                <div>
                    <input type="text" placeholder='First Name'
                        className='infoInput' name='firstname' />
                    <input type="text" placeholder='Last Name'
                        className='infoInput' name='lastname' />
                </div>

                <div>
                    <input type="text" placeholder='Email'
                        className='infoInput' name='email' />
                </div>

                <div>
                    <input type="text" placeholder='Password'
                        className='infoInput' name='password' />
                    <input type="text" placeholder='Confirm Password'
                        className='infoInput' name='confirmpass' />
                </div>

                <div>
                    <span style={{ fontSize: "13px" }}>Already have an account? Login</span>
                </div>

                <button className='button infoButton' type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Auth
