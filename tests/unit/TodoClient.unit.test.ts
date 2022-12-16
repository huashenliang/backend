import "reflect-metadata";

import TodoClient from "../../src/TodoClient";
import axios from "axios";

jest.mock("axios");

describe("TodoClient test suite", () => {
  test("should call axios get to fetch todo list", async () => {
    const client = new TodoClient();

    (axios.get as jest.Mock).mockResolvedValue({ data: "dummy" });
    const axiosSpy = jest.spyOn(axios, "get");

    await client.getTodo();
    expect(axiosSpy).toHaveBeenCalledTimes(1);
  });
});
