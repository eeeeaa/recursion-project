function fibs(n) {
  let array = [0, 1];
  if (n <= 0) return [];
  if (n === 1) return [array[0]];
  if (n === 2) return array;

  for (let i = 2; i < n; i++) {
    let a = array[i - 1];
    let b = array[i - 2];
    let c = a + b;
    array.push(c);
    a = b;
    b = c;
  }

  return array;
}

function fibsRec(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const array = fibsRec(n - 1);
  return [...array, array[n - 3] + array[n - 2]];
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const half = Math.ceil(array.length / 2);
    let leftHalf = mergeSort(array.slice(0, half));
    let rightHalf = mergeSort(array.slice(half));

    //sort two already sorted arrays
    return merge(leftHalf, rightHalf);
  }
}

function merge(left, right) {
  let sortedArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

module.exports = { fibs, fibsRec, mergeSort };
