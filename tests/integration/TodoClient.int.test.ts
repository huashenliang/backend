import "reflect-metadata";

import TodoClient from "../../src/TodoClient";
import { TodoItem } from "../../src/types";
import { expectTypeOf } from "expect-type";

describe("TodoClient Integration Test", () => {
  let client = new TodoClient();

  test("should get a list of 200 todo items", async () => {
    const result = await client.getTodo();

    expectTypeOf(result).toEqualTypeOf<TodoItem[]>();
    expect(result.length).toBeGreaterThan(0);
    expect(result.length).toBeLessThanOrEqual(200);
  });
});
