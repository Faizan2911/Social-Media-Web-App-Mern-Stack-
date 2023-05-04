import React, { useState } from 'react';
import './Auth.css';
import Logo from '../../Img/logo.png';

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(true);

    const [data, setData] = useState({ firstname: "", lastname: "", email: "", password: "", confirmpass: "" });

    const [confirmPass, setConfirmPass] = useState(true);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const handlSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            if (data.password !== data.confirmpass) {
                setConfirmPass(false)
            }
        }
    }



    const restForm = () => {
        setConfirmPass(true);

        setData({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmpass: ""
        })
    }



    return (
        
        //    Left Side
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h2>Welcome !</h2>
                    <h5>Explore the ideas throughout <br /> the world.</h5>
                </div>
            </div>


            {/* Right Side */}

            <div className="a-right">
                <form className='infoForm authForm' onSubmit={handlSubmit}>

                    <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>

                    {isSignUp &&
                        <div>
                            <input type="text" placeholder='First Name'
                                className='infoInput' name='firstname'
                                onChange={handleChange}
                                value={data.firstname}
                            />
                            <input type="text" placeholder='Last Name'
                                className='infoInput' name='lastname'
                                onChange={handleChange}
                                value={data.lastname}
                            />
                        </div>
                    }

                    <div>
                        <input type="text" placeholder='Email'
                            className='infoInput' name='email'
                            onChange={handleChange}
                            value={data.email}
                        />
                    </div>

                    <div>
                        <input type="password" placeholder='Password'
                            className='infoInput' name='password'
                            onChange={handleChange}
                            value={data.password}
                        />
                        {isSignUp &&
                            <input type="password" placeholder='Confirm Password'
                                className='infoInput' name='confirmpass'
                                onChange={handleChange}
                                value={data.confirmpass}
                            />
                        }
                    </div>


                    <span style={{ display: confirmPass ? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px" }}>
                        * Confirm Password is not same
                    </span>


                    <div>
                        <span style={{ fontSize: "12px", cursor: "pointer" }}
                            onClick={() => { setIsSignUp((prev) => !prev); restForm() }}
                        >
                            {isSignUp ? "Already have an account? Login here" : "Don't have an account? SignUp here"}
                        </span>
                    </div>

                    <button className='button infoButton' type='submit'>
                        {isSignUp ? "Sign Up" : "Login"}
                    </button>

                </form>
            </div>
        </div>
    )
}



export default Auth
