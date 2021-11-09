import React, { ChangeEvent, useState } from "react";
import userRepository, { IUser } from "../services/api";

import "../styles/register.scss";

export default function Register_page() {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    phone: "",
    password: "",
    _id: "",
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
          <h1> Cadastro </h1>
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
            name="phone"
            type="text"
            value={user.phone}
            placeholder="phone"
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
          <button type="submit"> Register </button>
        </form>
      </div>
    </div>
  );
}
