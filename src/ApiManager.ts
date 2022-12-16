import { injectable, inject } from "inversify";
import { IApiClient, IApiManager } from "./interfaces";
import { TYPES, TodoItem } from "./types";

@injectable()
class ApiManager implements IApiManager {
  @inject(TYPES.IApiClient) private _todoClient: IApiClient;

  async fetchData(): Promise<TodoItem[]> {
    console.log("Fetching Data...");
    return this._todoClient.getTodo();
  }
}

export default ApiManager;
