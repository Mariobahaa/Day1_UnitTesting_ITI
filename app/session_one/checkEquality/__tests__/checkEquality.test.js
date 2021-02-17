import { checkIfEven, checkIfString } from "../index";

describe("check equality", () => {
  test("should return true if got string", () => {
    expect(checkIfString("hamada")).toBeTruthy();
    expect(checkIfString(1)).toBeFalsy();
  });

  test("should return true if got string", () => {
    expect(checkIfEven(2)).toBeTruthy();
  
  });

  test("should return true if got string", () => {
    expect(checkIfEven(3)).toBeFalsy();
  
  });

  //   test("", () => {});
});
