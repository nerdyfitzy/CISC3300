const obj = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
};

Object.values(obj).forEach((val) => console.log(val));

const randomBool = true;

const str = randomBool ? "its true" : "its false";

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const squares = nums.map((num) => Math.pow(num, 2));

console.log(squares);
