import axios, { AxiosInstance } from "axios";

export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
}

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

  async updateUser(user_id: string, newUser: IUser) {
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

export default new userRepository("http://localhost:3333/");
