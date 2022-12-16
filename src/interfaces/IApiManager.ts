import { TodoItem } from "../types";

export default interface IApiManager {
  fetchData(): Promise<TodoItem[]>;
}
