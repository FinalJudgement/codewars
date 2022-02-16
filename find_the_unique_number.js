// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function getKeyByValue(object, valueToFind) {
  const keys = Object.keys(object);
  // Object {3:4, 10:1}
  // Keys {3, 10}
  return keys.find((key) => object[key] === valueToFind);
}

// assert.strictEqual(findUniq([ 3, 10, 3, 3, 3 ]), 10);
// object looks like: freqObj{3: 1} => {3:4, 10:1};
function findUniq(arr) {
  const freqObj = {};
  arr.forEach((element) => {
    if (freqObj[element] === undefined) {
      freqObj[element] = 1;
    } else {
      freqObj[element]++;
    }
  });
  return Number(getKeyByValue(freqObj, 1));
}
