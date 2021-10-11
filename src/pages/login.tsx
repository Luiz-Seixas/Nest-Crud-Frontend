import React, { ChangeEvent, useState } from "react";
import userRepository, { IUser } from "../services/api";

import "../styles/login.css";

export default function Login_page() {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
  });

  function create(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    userRepository.createUser(user);

    return console.log(user);
    // const newUser = await userRepository.createUser();
  }

  function saveUser(e: ChangeEvent<HTMLInputElement>) {
    // const userTest = {
    //   name: "",
    //   email: "",
    //   password: "",
    // };

    setUser({ ...user, [e.target.name]: e.target.value });
    // const { name, value } = e.target;

    console.log(user);
  }

  return (
    <div id="page-app">
      <div className="header">
        <a href="/">Home</a>
      </div>
      <div className="content">
        <div className="header">
          <h1> Login </h1>
        </div>
        <form onSubmit={create}>
          <input
            name="name"
            type="text"
            value={user.name}
            placeholder="Name"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              saveUser(e);
            }}
          />
          <input
            name="email"
            type="text"
            value={user.email}
            placeholder="Email"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              saveUser(e);
            }}
          />
          <input
            name="password"
            type="text"
            value={user.password}
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              saveUser(e);
            }}
          />
          <button type="submit"> Login </button>
        </form>
      </div>
    </div>
  );
}
