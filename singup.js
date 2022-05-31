import axios from "axios"
import {useState} from "react"

function SignUp() {

  
const [email , setemail] = useState("")
const [password , setpassword] = useState("")

const singuphandle = () =>{

const userobj = {
  email,
  password
}


  console.log(email,password)

  axios.post("http://localhost:8080/" , userobj)
  .then((res)=>{
    console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })


}


  return (
 <>

<h1>Sign Up</h1>

<input type="text" value={email}  onChange={(e)=>{setemail(e.target.value)}}  />
<br />
<input type="text" value={password}  onChange={(e)=>{setpassword(e.target.value)}} />
<br />
<button onClick={singuphandle} >Sign Up</button>

 </>
  );
}

export default SignUp;
