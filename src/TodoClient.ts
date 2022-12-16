import axios, { AxiosResponse } from "axios";
import { IApiClient } from "./interfaces";
import { injectable } from "inversify";
import { TodoItem } from "./types";

@injectable()
class TodoClient implements IApiClient {
  async getTodo(): Promise<TodoItem[]> {
    const response: AxiosResponse<TodoItem[]> = await axios.get<TodoItem[]>(
      `https://jsonplaceholder.typicode.com/todos`,
      {
        headers: {
          "Accept-Encoding": "*",
        },
      }
    );
    return response.data;
  }
}

export default TodoClient;
