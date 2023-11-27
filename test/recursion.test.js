const recursion = require("../js/recursion");
test("verify loop fibbonacci for zero", () => {
  expect(recursion.fibs(0)).toStrictEqual([]);
});
test("verify loop fibbonacci for one", () => {
  expect(recursion.fibs(1)).toStrictEqual([0]);
});
test("verify loop fibbonacci for two", () => {
  expect(recursion.fibs(2)).toStrictEqual([0, 1]);
});
test("verify loop fibbonacci for more than two", () => {
  expect(recursion.fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("verify recursive fibbonacci for zero", () => {
  expect(recursion.fibsRec(0)).toStrictEqual([]);
});
test("verify recursive fibbonacci for one", () => {
  expect(recursion.fibsRec(1)).toStrictEqual([0]);
});
test("verify recursive fibbonacci for two", () => {
  expect(recursion.fibsRec(2)).toStrictEqual([0, 1]);
});
test("verify recursive fibbonacci for more than two", () => {
  expect(recursion.fibsRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});

test("verify merge sort for more than two", () => {
  expect(recursion.mergeSort([1, 3, 2, 7, 6, 4, 8, 5])).toStrictEqual([
    1, 2, 3, 4, 5, 6, 7, 8,
  ]);
});
