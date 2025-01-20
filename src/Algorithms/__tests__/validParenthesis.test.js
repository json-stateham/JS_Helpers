import { describe, expect, test } from "vitest";
import { validParenthesis } from "../validParenthesis";

describe("validParenthesis", () => {
  test("should return true 1", () => {
    expect(validParenthesis("---(++++)----")).toBeTruthy();
  });

  test("should return true 2", () => {
    expect(validParenthesis("")).toBeTruthy();
  });

  test("should return true 3", () => {
    expect(validParenthesis("before ( middle []) after ")).toBeTruthy();
  });

  test("should return true 4", () => {
    expect(validParenthesis("( [ <> () ] <> )")).toBeTruthy();
  });

  test("should return false 1", () => {
    expect(validParenthesis(") (")).toBeFalsy();
  });

  test("should return false 2", () => {
    expect(validParenthesis("<( >)")).toBeFalsy();
  });

  test("should return false 3", () => {
    expect(validParenthesis(" ( [)")).toBeFalsy();
  });
});
