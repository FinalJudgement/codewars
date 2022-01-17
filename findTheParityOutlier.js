//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(int) {
  var even = int.filter((a) => a % 2 == 0);
  var odd = int.filter((a) => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

function findOutlier(integers) {
  let oddArr = [];
  let evenArr = [];
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evenArr.push(integers[i]);
    } else {
      oddArr.push(integers[i]);
    }
  }
  if (evenArr.length > oddArr.length) {
    return oddArr[0];
  } else {
    return evenArr[0];
  }
}

function findOutlier(integers) {
  let oddArr = [];
  let evenArr = [];
  return integers.map((element, index, array) => {
    if (element % 2 == 0) {
      evenArr.push(element);
    } else {
      oddArr.push(element);
    }
    if (evenArr.length > oddArr.length) {
      return oddArr[0];
    } else {
      return evenArr[0];
    }
  });
}
