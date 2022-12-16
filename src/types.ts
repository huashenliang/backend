type TodoItem = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const TYPES = {
  IApiClient: Symbol.for("IApiClient"),
  IApiManager: Symbol.for("IApiManager"),
};

export { TYPES, TodoItem };
