/**
 * This question is all about writing tests so the roles are reversed! We have provided a function and it is up to you to write the tests.
 * The function comment gives you an idea of what the function expects and what it should return.
 */

/**
 * This function partitions an array into two groups, the first containing all the elements that returned true, the second that returned false.
 *
 * That means that it runs every element in the given array through the checkFunction.
 * If the checkFunction returns true it will be put into a true array, if false into a false array.
 *
 * The function returns an array with the true array and the false array.
 * If either the array or the checkFunction are invalid it should return an empty array.
 *
 * DO NOT EDIT THE FUNCTION, YOU ONLY WRITE THE TESTS
 */
const partition = (array, checkFunction) => {
  if (!Array.isArray(array) || typeof checkFunction !== "function") {
    return [];
  }

  const trueArray = [];
  const falseArray = [];

  array.forEach((element) => {
    if (checkFunction(element)) {
      trueArray.push(element);
    } else {
      falseArray.push(element);
    }
  });

  return [trueArray, falseArray];
};

/**
 * TEST CODE: ONLY EDIT THIS
 * We've provided some syntax for you but feel free to change it to your liking! It should follow jest syntax though!
 *
 * To run the test make sure you have done an `npm install` command in your terminal and then run `npm t` or `npm run test`
 */
describe("partition", () => {
  const testArray = [true, false, true, false];
  const checkingFn = (x) => x === true;
  it("splits an array into two groups", () => {
    const testResult = partition(testArray, checkingFn);
    expect(testResult.length === 2).toBe(true);
  });
  it("the first nested array includes only true", () => {
    const testResult = partition(testArray, checkingFn);
    expect(testResult[0].every(element => element === true)).toBe(true);
  })
  it("the second nested array includes only false", () => {
    const testResult = partition(testArray, checkingFn);
    expect(testResult[1].every(element => element === false)).toBe(true);
  })
});
//I didn't get if I should've made tests designed to fail every time to indicate that they are working or if what I did is alright
