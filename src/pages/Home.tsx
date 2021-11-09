import { useEffect, useState } from "react";
import userRepository from "../services/api";
import "../styles/Home.scss";

import { BsTrash } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";

interface IUsers {
  name: string;
  email: string;
  phone: string;
  password: string;
  createdAt: string;
  __v: number;
  _id: string;
}

export default function Home() {
  const [users, setUsers] = useState<IUsers[]>([]);

  async function getUsers() {
    try {
      const res = await userRepository.getUsers();
      console.log(res);

      if (res) {
        setUsers(res);
      } else {
        console.log("Users not found!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser(user_id: string) {}

  function deleteUser(user_id: string): any {
    // userRepository.deleteUser(user_id);
    console.log(user_id);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="page_home">
      <header>
        <h1>Banco de Usuários</h1>
        <a href="/login"> Login </a>
      </header>
      <div className="content">
        <h1>Users list</h1>
        <div className="content-wrapper">
          <div className="table-titles">
            <span>Name</span>
            <span>Emal</span>
            <span>Phone</span>
            <span>CreatedAt</span>
          </div>
          {users.map((user) => (
            <div className="users-content">
              <div className="user-info">
                <div className="info">{user.name}</div>
                <div className="info">{user.email}</div>
                <div className="info">{user.phone}</div>
                <div className="info">{user.createdAt}</div>

                {/* <a href={}>
                  <FiEdit3 size="16px" />
                </a> */}
                <button onClick={deleteUser(user._id)}>
                  <BsTrash size="16px" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={getUsers}>Refresh</button>
      </div>
      <div className="content"></div>
    </div>
  );
}
