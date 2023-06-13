import { useContext, useState } from "react";
import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    console.log(username, password);
    const respose = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (respose.ok) {
      respose.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
    } else {
      alert("wrong credentials");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <form action="" className="login" onSubmit={login}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        onChange={(ev) => setUsername(ev.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(ev) => setPassword(ev.target.value)}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
