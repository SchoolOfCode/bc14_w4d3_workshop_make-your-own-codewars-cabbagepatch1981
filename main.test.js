//👉 Write your tests below here: 🍏
import { askSteve } from "./main.js";
console.log(askSteve);
//describe("askSteve", () => {

describe("Testing astSteve function", () => {
  test("askSteve function exists", () => {
    expect(askSteve).toBeDefined();
  });
  test("askSteve function returns a string", () => {
    expect(typeof askSteve(20)).toBe("string");
  });
  test("askSteve function returns correct string when understood is less than 100", () => {
    expect(askSteve(20)).toBe(
      "Steve says you've made a great start and he's here to help!"
    );
  });
  test("askSteve function returns correct string when understood is 100 or more", () => {
    expect(askSteve(100)).toBe(
      "Steve says there's still a lot to learn, but you are heading in the right direction - well done!"
    );
  });
  test("askSteve function returns correct string when understood is 200 or more", () => {
    expect(askSteve(200)).toBe(
      "Steve says you are doing an amazing job! Keep it up!"
    );
  });
});
