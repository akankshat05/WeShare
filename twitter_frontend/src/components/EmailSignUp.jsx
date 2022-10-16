import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../Stylesheet/SignUp.css'
const EmailSignUp = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        username: "",
        password: "",
        vpassword: ""
    });
    let name, value
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name
        value = e.target.value
        setUser({
            ...user, [name]: value
        })
    }
    const postData = async (e) => {
        e.preventDefault()
        
        const { username, password, vpassword } = user
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password, vpassword })
        });
        // checking if invalid response
        console.log(res.status)
        if (res.status == 503) {
            window.alert("invalid")
        }
        else if (res.status == 502) {
            window.alert("username already exists")
        }
        else if (res.status == 504) {
            window.alert("error")
        }
        else {
            window.alert("registration successful")
            console.log("success")
            history.push("/home")
        }

    }
    return (
        <div style={{marginTop: '10%'}}>
        <div className="form-div">
            <form className="form" method='POST'>
               
                <input type="text"
                    placeholder="username"
                    name="username"
                    autocomplete="off"
                    value={user.username}
                    onChange={handleInputs} />
               
                <input type="password"
                    name="password"
                    placeholder="password"
                    autocomplete='off'
                    value={user.password}
                    onChange={handleInputs} />
               
                <input type="password"
                    name="vpassword"
                    placeholder="confirm password"
                    autocomplete='off'
                    value={user.vpassword}
                    onChange={handleInputs} />
                <button onClick={postData}>SIGN UP</button>
            </form>
        </div>
        </div>
    )
}

export default EmailSignUp