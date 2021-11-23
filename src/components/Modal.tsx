import { ChangeEvent, useState, useEffect } from "react";
import userRepository from "../services/api";

import "../styles/Home.scss";

interface IProps {
  user_id: string;
  edit_user(): void;
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

    userRepository.updateUser(props.user_id, user);

    return setUser(initialState);
  }

  const closeModal = () => {
    props.edit_user();
  };

  useEffect(() => {
    console.log("modal props", props.user_id);
  }, []);

  return (
    <div className="Modal-Content">
      <header className="modal-header">
        <h1>Edit User</h1>
        <button className="close-modal" onClick={closeModal}>
          x
        </button>
      </header>
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

        <button type="submit">Edit</button>
      </form>
    </div>
  );
}
