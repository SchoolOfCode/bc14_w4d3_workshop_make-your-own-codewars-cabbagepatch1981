//👉 Write your tests below here: 🍏
import { askSteve } from "./main.js";
console.log(askSteve);

//This test checks that the function exists
describe("Testing astSteve function", () => {
  test("askSteve function exists", () => {
    expect(askSteve).toBeDefined();
  });

  //This test checks that the function returns a string
  test("askSteve function returns a string", () => {
    expect(typeof askSteve(20)).toBe("string");
  });

  //This test checks that the function returns the correct string when understood is less than 100
  test("askSteve function returns correct string when understood is less than 100", () => {
    expect(askSteve(20)).toBe(
      "Steve says you've made a great start and he's here to help!"
    );
  });

  //This test checks that the function returns the correct string when understood is 100 or more
  test("askSteve function returns correct string when understood is 100 or more", () => {
    expect(askSteve(100)).toBe(
      "Steve says there's still a lot to learn, but you are heading in the right direction - well done!"
    );
  });

  //This test checks that the function returns the correct string when understood is 200 or more
  test("askSteve function returns correct string when understood is 200 or more", () => {
    expect(askSteve(200)).toBe(
      "Steve says you are doing an amazing job! Keep it up!"
    );
  });
});
