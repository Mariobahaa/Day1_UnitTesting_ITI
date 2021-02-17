import { sum } from "../index";

describe("Sum Numbers", () => {
  test("should sum two numbers", () => {
    const input1 = 3;
    const input2 = 5;
    const expectedOutput = 8;
    //  expect( myFunction with inputs ).(assertionFunction)
    expect(sum(input1, input2)).toBe(expectedOutput);
  });

  test("should return not string handled error if got string input", () => {
    const input1 = "text";
    const input2 = 5;
    const output = "no string inputs are allowed";
    expect(sum(input1, input2)).toEqual(output);
  });
});

// sum ==> 1 (input1), 2 (input2) ----> 3 (output)
// sum(1,2) --> 3
