import { TodoItem } from "../types";

export default interface IApiClient {
  getTodo(): Promise<TodoItem[]>;
}
