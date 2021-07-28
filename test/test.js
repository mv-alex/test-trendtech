const arrToString = require("../index").arrToString;
const assert = require("assert");

describe("arrToString()", () => {
  const tests = [
    { args: [1, 2, 3, 4, 5, 6, 7, 8], expected: "1-8" },
    { args: [1, 3, 4, 5, 6, 7, 8], expected: "1,3-8" },
    { args: [1, 3, 4, 5, 6, 7, 8, 10, 11, 12], expected: "1,3-8,10-12" },
    { args: [1, 2, 3], expected: "1-3" },
    { args: [1, 2, 4], expected: "1,2,4" },
    { args: [1, 2, 4, 5, 6], expected: "1,2,4-6" },
    {
      args: [1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21],
      expected: "1-3,7-9,15,17,19-21",
    },
    {
      args: [1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002],
      expected: "1-6,100,1091,1999-2002",
    },
    { args: [1], expected: "1" },
    { args: [1, 3, 5, 7, 9, 11], expected: "1,3,5,7,9,11" },
  ];

  tests.forEach(({ args, expected }) => {
    it(`correctly convert [${args}] to "${expected}"`, async () => {
      const result = await arrToString(args);
      assert.strictEqual(result, expected);
    });
  });
});
