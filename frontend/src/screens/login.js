import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.css';
//import { useNavigate } from "react-router-dom";
const Login = () => {
  //const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const navigate = useNavigate();
  //const API = "http://localhost:3001/api/v1/auth";
  const createUser = (e) => {
    e.preventDefault();
    if(email.trim() === "" ) return toast.error("email required")
    if(password.trim() === "" ) return toast.error("password required")

    console.log(email, password)
  };
  return (
    <React.Fragment>
      <ToastContainer/>
      <div className="w-100% h-screen flex items-center justify-center bg-slate-200">
        <form onSubmit={createUser} className="bg-white w-40% h-fit rounded-md max-[1000px]:w-50% max-[800px]:w-60% max-[700px]:w-70% max-[600px]:w-80% max-[500px]:w-90%">
        <h2 className="w-90% my-5 m-auto text-2xl text-slate-800">
            <span className="font-bold">Login</span> below
          </h2>
          <div className="my-5 w-90% m-auto">
            <input
              className="py-2.5 w-100% border-b-2 border-gray-300 outline-none"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="username"
            />
          </div>
          <div className="my-5 w-90% m-auto">
            <input
              className="py-2.5 w-100% border-b-2 border-gray-300 outline-none"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
            />
          </div>
          <div className="my-5 w-90% m-auto">
            <button
              className="w-40% m-auto py-2.5 bg-blue-300 text-white font-bold"
              type="submit"
            >
              register
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
