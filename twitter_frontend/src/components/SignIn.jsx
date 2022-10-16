import React, { useState } from 'react'
import { useHistory } from 'react-router'
import '../Stylesheet/SignIn.css'
import { Twitter } from '@mui/icons-material';
const SignIn = () => {
    const history = useHistory()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const loginUser = async (e) => {
        e.preventDefault()
        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        const data = res.json()
        console.log(data)
        if (res.status == 400 || !data) {
            
            console.log("inalvid data")
        }
        else {
            // window.alert("login successful")
            history.push("/home")
        }
    }
    return (
        <>
            <div class="flex">
                <div className="signIn_details">
                    <div className="text-center mb-3 icon" ><Twitter /></div>
                    <div className="signIn_section">
                        <div>Sign in to Twitter</div>
                        <div className="google">
                            Sign in with Google
                        </div>
                        <div className="apple">
                            Sign in with Apple
                        </div>
                        <div class="text-center" style={{ fontWeight: 600 }}>or</div>
                        <div className='input'>
                            <input
                                class="mb-3"
                                type="text"
                                placeholder="username" value={username}
                                autocomplete='off'
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className='input'>
                            <input
                                class="mb-3"
                                type="password"
                                placeholder="password" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autocomplete='off' />
                        </div>
                        <button onClick={loginUser}>Sign In</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignIn