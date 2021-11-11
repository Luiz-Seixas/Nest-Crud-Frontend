import { useEffect, useState } from "react";
import userRepository from "../services/api";
import "../styles/Home.scss";

import Modal from "../components/Modal";

import { BsTrash } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";

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
      const res: IUsers[] = await userRepository.getUsers();
      const usersArray = res.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      console.log(usersArray);

      if (res) {
        setUsers(res);
      } else {
        console.log("Users not found!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser(_user_id: string) {}

  function deleteUser(user_id: string) {
    console.log(user_id);
    userRepository.deleteUser(user_id);
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="page_home">
      <header>
        <h1>Banco de Usuários</h1>
      </header>
      <div className="content">
        <h1>Users list</h1>
        <div className="content-wrapper">
          <div className="table-titles">
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
            <span>CreatedAt</span>

            <a href="/login" title="Cadastrar">
              <IoCreateOutline size="28px" />
            </a>
          </div>
          {users.map((user) => (
            <table className="users-content">
              <tr className="user-info">
                <td className="info">{user.name}</td>
                <td className="info">{user.email}</td>
                <td className="info">{user.phone}</td>
                <td className="info">{user.createdAt}</td>

                {/* <a href={}>
                  <FiEdit3 size="16px" />
                </a> */}
                <button
                  onClick={() => deleteUser(user._id)}
                  title="Deletar usuário"
                >
                  <BsTrash size="16px" />
                </button>
              </tr>
            </table>
          ))}
        </div>
        <button onClick={getUsers}>Refresh</button>
      </div>
      <div className="content"></div>
    </div>
  );
}
