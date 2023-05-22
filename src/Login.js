import {useState} from "react"
import './App.css';
import Jobs from './JobsRec.js';
import { useNavigate } from "react-router-dom";

function Login() {
  const history=useNavigate();
  const [login,setLogin]=useState({})
  const url="https://dev123.gigin.ai/abc/index.php/Api_controller/login_email"
  const handleChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
  }
  const handlesubmit = async()=>{
    //alert(JSON.stringify(login));
    try{
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },      
      body: JSON.stringify(login), // body data type must match "Content-Type" header
    });
    const data= await response.json();
    alert(JSON.stringify(data))
    console.log(data.status);
    if(data.status=='success'){history('/jobs') }
    else{alert('login failed')}
  }
  catch{
    alert('Some issue occured')
  }
  }
  console.log(login)
  return (
    <div className="App">
      <div className="App">
      <div className="login">
      <h1>Login</h1>
     <label>Email Id  
       <input name="email"
      onChange={(e)=>handleChange(e)}>
        </input>
      </label>
     <br/>
     <label>Password 
       <input type="password" name="password"
      onChange={(e)=>handleChange(e)}>
        </input>
      </label>     
    
     <br/>
     </div>
     <button onClick={handlesubmit}>Login</button>
    
     

    </div>
    
    </div>
  );
}

export default Login;
