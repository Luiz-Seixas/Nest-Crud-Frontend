import { ChangeEvent, useState, useEffect } from "react";
import userRepository from "../services/api";

import "../styles/Modal.scss";

interface IProps {
  user_id: string;
}

export interface IEditUser {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
}

export default function Modal(props: IProps) {
  const [user, setUser] = useState<IEditUser>({});
  const initialState = {};

  function saveUser(e: ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  }

  function updateUser(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("user", user);

    return userRepository.updateUser(props.user_id, user);
  }

  useEffect(() => {
    console.log("modal props", props.user_id);
  }, []);

  return (
    <div className="Content">
      <form onSubmit={updateUser}>
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
          placeholder="Email"
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

        <button type="submit">Edi</button>
      </form>
    </div>
  );
}
