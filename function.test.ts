import { timesTwo } from "./function";

  test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
  });

describe("describe", () => {

  test("inside describe Multiplies by two", () => {
    expect(timesTwo(6)).toBe(8);
  });
});

