import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "./types.js";
import { IApiClient, IApiManager } from "./interfaces/index.js";
import TodoClient from "./TodoClient.js";
import ApiManager from "./ApiManager.js";

const myContainer = new Container();

myContainer.bind<IApiManager>(TYPES.IApiManager).to(ApiManager);
myContainer.bind<IApiClient>(TYPES.IApiClient).to(TodoClient);

export { myContainer };
