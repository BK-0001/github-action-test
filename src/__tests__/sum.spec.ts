import { sum } from "../sum";

describe("Sum Function", () => {
  it("should return 3 when arguments are 1, 2", () => {
    expect(sum(1, 2)).toEqual(3);
  });

  it("should return 5 when arguments are 2 and 3", () => {
    expect(sum(2, 3)).toBe(5);
  });
});

describe("Strings", () => {
  it("should match with the regex /hello/", () => {
    expect(
      "hello world alsdjkflaksdjfladfjaldskjfalsdfkjladsfjkalsdfkjalsdjkfalsdfjkalsdkjfalsdkfjalsdkfjalsdkfjasdf"
    ).toMatch(/world/);
  });
});

describe("Array", () => {
  it("should contain something inside the array", () => {
    expect([1, 2, 3, 4]).toContain(3);
  });
});
