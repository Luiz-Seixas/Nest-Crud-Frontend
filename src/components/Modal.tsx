import { ChangeEvent } from "react";
import userRepository from "../services/api";

import "../styles/Modal.scss";

export default function Modal() {
  function updateUser() {
    // userRepository.updateUser()
  }

  return (
    <div className="Content">
      <form onSubmit={updateUser}>
        <input
          name="name"
          type="text"
          // value={user.name}
          placeholder="Name"
          // onChange={(e: ChangeEvent<HTMLInputElement>) => {
          //   saveUser(e);
          // }}
        />
        <input
          name="email"
          type="text"
          // value={user.email}
          placeholder="Email"
          // onChange={(e: ChangeEvent<HTMLInputElement>) => {
          //   saveUser(e);
          // }}
        />
        <input
          name="phone"
          type="text"
          // value={user.phone}
          placeholder="phone"
          // onChange={(e: ChangeEvent<HTMLInputElement>) => {
          //   saveUser(e);
          // }}
        />
      </form>
    </div>
  );
}
