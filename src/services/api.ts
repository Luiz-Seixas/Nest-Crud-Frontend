import axios, { AxiosInstance } from "axios";

export interface IUser {
  email: string;
  name: string;
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
}

export default new userRepository("http://localhost:3333/");
