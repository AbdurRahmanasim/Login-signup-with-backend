import axios from "axios"
import {useState} from "react"

function Login() {

  
const [email , setemail] = useState("")
const [password , setpassword] = useState("")

const loginuphandle = () =>{

const userobj = {
  email,
  password
}


//   console.log(email,password)

  axios.post("http://localhost:8080/login" , userobj)
  .then((res)=>{
    console.log("login succesful")
  })
  .catch((err)=>{
    console.log("invalid user")
  })


}


  return (
 <>

<h1>Login Up</h1>

<input type="text" value={email}  onChange={(e)=>{setemail(e.target.value)}}  />
<br />
<input type="text" value={password}  onChange={(e)=>{setpassword(e.target.value)}} />
<br />
<button onClick={loginuphandle} >Login Up</button>

 </>
  );
}

export default Login;
