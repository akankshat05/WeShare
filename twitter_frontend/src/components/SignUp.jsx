import React from 'react'
import { Outlet, Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import { Google, Apple } from '@mui/icons-material';
import pic from "../images/twitter.png";
import '../Stylesheet/SignUp.css'
const SignUp = () => {
    return (
        <>
            <div class="container-fluid">
                <div class="row sign-up">
                    <div class="img col-lg-7 col-md-6 col-sm-12">
                        <img src={pic} />
                        <TwitterIcon id="overlay" />
                    </div>
                    <div class="content col-lg-5 col-md-6 col-sm-12">
                        <div style={{ paddingLeft: 40 }}>
                            <TwitterIcon className="icon" id="t_icon" />
                            <h1 style={{ marginBottom: 40 }}>Happening now</h1>
                            <div style={{ width: "90%" }}>
                                <h3 style={{ marginBottom: 30 }}>Join Twitter today.</h3>
                                <div class="bt" id="google">
                                    <span style={{ marginRight: 3 }}><Google fontSize="small" /> </span>
                                    Sign up with Google
                                </div>
                                <div class="bt" id="apple">
                                    <span style={{ marginRight: 3 }}><Apple fontSize="small" /> </span>
                                    Sign up with Apple
                                </div>
                                <p id="orClass"><span>or</span></p>
                                <Link to="/email/signup" style={{ textDecoration: 'none' }}>
                                    <div class="bt" id="phone" style={{ marginBottom: 80 }}>
                                        Sign up with phone or email
                                    </div>
                                </Link>
                                <p>Already have an account?</p>
                                <Link to="/signin" style={{ textDecoration: 'none', color: "rgb(29, 155, 240)" }}>
                                    <div class="bt"> Sign In </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp
