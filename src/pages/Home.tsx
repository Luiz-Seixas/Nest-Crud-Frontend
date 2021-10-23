import { useEffect, useState } from "react";
import userRepository from "../services/api";
import "../styles/Home.scss";

interface IUsers {
  name: string;
  email: string;
  password: string;
  __v: number;
  _id: string;
}

export default function Home() {
  const [users, setUsers] = useState<IUsers[]>([]);

  async function getUsers() {
    try {
      const res = await userRepository.getUsers();

      if (res) {
        setUsers(res);
      } else {
        console.log("Users not found!");
      }
    } catch (error) {
      console.log(error);
    }
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
        <div className="users-content">
          {users.map((user) => (
            <div className="username">{user.name}</div>
          ))}
        </div>
        <button onClick={getUsers}>Refresh</button>
      </div>
      <div className="content"></div>
    </div>
  );
}
