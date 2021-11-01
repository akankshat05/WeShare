import React, {useState} from 'react'
import { useHistory } from 'react-router'
const SignIn = () => {
const history = useHistory()
const [username, setUsername]= useState('')
const [password,setPassword]= useState('')
const loginUser = async (e)=>{
    e.preventDefault()
    const res = await fetch('/login',{
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify({username, password}) 
});
    const data = res.json()
    console.log(data)
    if(res.status==400||!data){
        window.alert("inalvid data")
        console.log("inalvid data")
    }
    else{
        window.alert("login sucess")
        console.log("sccess")
        history.push("/")
    }
}
    return (
        <div>
                    <form action="" className="form">
                    <label >Username</label>
                    <input  type="text"
                     placeholder="username" value={username}
                     autoComplete='off'
                     onChange={(e) => setUsername(e.target.value)}  />
                    <label >Password</label>
                    <input  type="password" 
                     placeholder="password" value={password}
                     onChange={(e) => setPassword(e.target.value)} 
                     autoComplete='off'  />
                    <button onClick={loginUser}>SIGN IN</button>
                </form>
        </div>
    )
}
export default SignIn



