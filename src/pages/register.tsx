import React, { ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import userRepository from "../services/api";

import "../styles/register.scss";

export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export default function Register_page() {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const history = useHistory();

  function create(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    userRepository.createUser(user);

    return history.push("./");
  }

  function saveUser(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  return (
    <div id="page-app">
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
            type="email"
            value={user.email}
            placeholder="E-mail"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              saveUser(e);
            }}
          />
          <input
            name="phone"
            type="tel"
            value={user.phone}
            placeholder="Phone"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              saveUser(e);
            }}
          />
          <input
            name="password"
            type="password"
            value={user.password}
            placeholder="Password"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              saveUser(e);
            }}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
