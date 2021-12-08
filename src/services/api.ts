import axios, { AxiosInstance } from "axios";
import { IUser } from "../pages/register";
import { IEditUser } from "../components/Modal";

class userRepository {
  protected readonly instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
  }

  async getUsers() {
    const response = await this.instance.get("/users");
    return response.data;
  }

  async createUser(newUser: IUser) {
    try {
      const response = await this.instance.post("/users", newUser);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(user_id: string, newUser: IEditUser) {
    try {
      const response = await this.instance.patch(`/users/${user_id}`, newUser);

      return response;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteUser(id: string) {
    try {
      const response = await this.instance.delete(`/users/${id}`);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new userRepository(
  "https://nest-crud-backend-app.herokuapp.com/"
);
