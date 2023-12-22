// test take two arguments 1 string description of test 2 callback function to test

import { sum } from "../sum";

test("sum function should calcuate the sum of two numbers", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});
