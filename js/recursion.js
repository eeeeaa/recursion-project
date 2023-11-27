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

module.exports = { fibs, fibsRec };
