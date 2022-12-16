import { myContainer } from "./inversify.config.js";
import { TYPES } from "./types.js";
import { IApiManager } from "./interfaces";

const apiManager = myContainer.get<IApiManager>(TYPES.IApiManager);

async function main() {
  const data = await apiManager.fetchData();
  console.log("Fetched Data: ", data);
  console.log("Total size of todo items: ", data.length);
}

main();
