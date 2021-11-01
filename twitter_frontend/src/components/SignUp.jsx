import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../Stylesheet/SignUp.css'
const SignUp = () => {
    // const history = useHistory()
    const [user,setUser]= useState({
        username:"",
        password:"",
        vpassword:"",
        profilePic:""
    });
    let name, value
    const handleInputs = (e) =>{
        console.log(e)
        name=e.target.name
        value=e.target.value
        setUser({
            ...user,[name]:value
        })
    }
    const postData = async (e) => {
        e.preventDefault()
        //LHS AND RHS SHOULD BE SAME
        const {username, password, vpassword, profilePic} = user
        const res = await fetch('/register',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({username, password, vpassword, profilePic}) 
        });
        // checking if invalid response
        //  if(res.status==422){
        //    window.alert("inalvid regesitraion")
        //    console.log("inalvid regesitraion")
        //  }
        // else{
        //     window.alert("registration sucess")
        //     console.log("sccess")
        // }
            // history.push("/login")
        
}
    return (
            <div className="Form_container">
                <form className="form" method='POST'>
                    <label >Username</label>
                    <input type="text"
                     placeholder="username"
                     name="username"
                     autoComplete="off"
                     value={user.username}
                     onChange={handleInputs}/>
                    <label >Password</label>
                    <input type="password" 
                    name="password"
                    placeholder="password"
                    autoComplete='off'
                    value={user.password}
                    onChange={handleInputs}/>
                    <label >Confirm password</label>
                    <input type="password" 
                    name="vpassword"
                    placeholder="confirm password"
                    autoComplete='off'
                    value={user.vpassword}
                    onChange={handleInputs}/>
                    <label >Profile picture</label>
                    <input type="file"
                    name="profilePic"
                    value={user.profilePic}
                    placeholder="confirm password"
                    onChange={handleInputs} />
                    <button onClick={postData}>SIGN UP</button>
                </form>
            </div>
    )
}
export default SignUp
