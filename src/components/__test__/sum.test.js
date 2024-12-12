import { sum } from "../sum";

test("Sum function says sum of two numbers testcase", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
