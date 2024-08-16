import React, { useState } from "react";
import { toast } from "react-toastify";
const Login = () => {
const [auth, setAuth]=useState({
    email: "",
    password: "",
});
const formhander =(e)=>{
        e.preventDefault(); 
        console.log(auth)
       // to prevent page reload on form submission.
       setAuth({
        email: "",
        password: "",
       })
       toast.success("login success")
    }
  return (
    <div className="container">
      <h1 className="text-center ">Login Screen</h1>
      <form onSubmit={formhander}>
        <div className="text-center m-auto rounded shadow w-25 p-3 bg-dark">

          <div className="p-3">
            <input type="email" placeholder="Enter your email" name="email" value={auth.email} onChange={(e)=>setAuth({...auth, email:e.target.value})} className="form-control"/>
          </div>
          <div className="p-3">
            <input type="password" placeholder="Enter your password" name="password" value={auth.password} onChange={(e)=>setAuth({...auth, password:e.target.value})}  className="form-control" />
          </div>
          <button type="submit" className="btn btn-info">submit</button>

          <a href="#" className="text-white p-3">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default Login;