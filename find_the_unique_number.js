// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function findUniq(arr) {
  const count = {};
  arr.forEach((x) => {
    count[x] = (count[x] || 0) + 1;
  });

  return Number(getKeyByValue(count, 1));
}
