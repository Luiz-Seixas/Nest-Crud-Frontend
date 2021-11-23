import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  useEffect,
  useState,
} from "react";
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
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState(false);

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(users.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = users.slice(startIndex, endIndex);

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
      console.log("users array", users);

      const reducedArray = usersArray.slice(0, 12);

      if (res) {
        setUsers(usersArray);
      } else {
        console.log("Users not found!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser() {
    console.log(userId);
  }

  function deleteUser(user_id: string) {
    console.log(user_id);
    userRepository.deleteUser(user_id);
    getUsers();
  }

  function toggleEditForm(user_id: string) {
    setShow(!show);
    setUserId(user_id);

    if (!show && userId) {
      return console.log("toglle user_id", userId);
    } else {
      console.log("show fail");
    }
  }

  function handleSetPage(index: number) {
    return setCurrentPage(index);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div id="page_home">
      <header className="page-header">
        <h1>Users Bank</h1>
      </header>
      <div className="content">
        <h1>Users list</h1>
        <div className="content-wrapper">
          <div className="table-titles">
            <span>Name</span>
            <span>E-mail</span>
            <span>Phone</span>
            <span>CreatedAt</span>

            <a href="/login" title="Cadastrar">
              <IoCreateOutline size="28px" />
            </a>
          </div>
          {currentItems.map((user) => (
            <table className="users-content">
              <tr className="user-info">
                <td className="info">{user.name}</td>
                <td className="info">{user.email}</td>
                <td className="info">{user.phone}</td>
                <td className="info">{user.createdAt}</td>

                <button
                  onClick={() => toggleEditForm(user._id)}
                  title="Editar usuário"
                >
                  <FiEdit3 size="16px" />
                </button>
                <button
                  onClick={() => deleteUser(user._id)}
                  title="Deletar usuário"
                >
                  <BsTrash size="16px" />
                </button>
              </tr>
            </table>
          ))}

          <div className="pagination-buttons">
            {Array.from(Array(pages), (item, index) => {
              return (
                <button
                  onClick={() => {
                    handleSetPage(index);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>

        {show ? <Modal user_id={userId} /> : null}

        <button onClick={getUsers}>Refresh</button>
      </div>
    </div>
  );
}
