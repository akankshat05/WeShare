import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../Stylesheet/SignUp.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import pic from "../images/twitter.png";
const SignUp = () => {
    const history = useHistory()
    const [display, setDisplay] = useState(false)
    const [user,setUser]= useState({
        username:"",
        password:"",
        vpassword:""
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
        const {username, password, vpassword} = user
        const res = await fetch('/register',{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({username, password, vpassword}) 
        });
        // checking if invalid response
        console.log(res.status)
        if(res.status==503){
            window.alert("ipSS")
          }
          else if(res.status == 502){
             window.alert("username already exists")
          }
          else if(res.status == 504){
             window.alert("wiiwo")
          }
         else{
             window.alert("registration sucess")
             console.log("sccess")
             history.push("/")
         }
        
}
    return (
<>
 <div className="">
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
                    <button onClick={postData}>SIGN UP</button>
                </form>
            </div>





<div class="container-fluid">
  <div class="row sign-up">
    <div class="img col-lg-7 col-md-6 col-sm-12">
      <img src={pic}/>
      <TwitterIcon id="overlay"/>
    </div>
    <div class="content col-lg-5 col-md-6 col-sm-12">
    <div style={{paddingLeft : 40}}>
    <TwitterIcon className="icon" id="t_icon"/>
    <h1 style={{marginBottom: 40}}>Happening now</h1>
    <div>
    <h3 style={{marginBottom: 30}}>Join Twitter today.</h3>
    <div class="bt" id="google"> 
    Sign up with Google
    </div>
    <div class="bt" id="apple">
    Sign up with Apple
    </div>
    <p>or</p>
    <div class="bt" id="phone" style={{marginBottom: 80}}
    onClick={setDisplay}
    >Sign up with phone or email</div>
    <p>Already have an account?</p>
    <div class="bt" style={{color: "rgb(29, 155, 240)"}}>Sign In</div>
    </div>
    </div>
    </div>
</div>
</div>
</>
    )
}
export default SignUp
