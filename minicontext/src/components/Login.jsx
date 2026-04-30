import React, { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  };
  return (
    <>
      <div className="flex items-center justify-center gap-6 flex-col border w-60 mx-auto h-60 rounded bg-black text-white">
        <h3>Login</h3>
        <input
        className="border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
        className="border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button onClick={handleSubmit} className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 rounded-full px-5 py-1 text-white">Submit</button>
      </div>
    </>
  );
}

export default Login;
