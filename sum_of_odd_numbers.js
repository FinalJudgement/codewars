// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
  let currentNum = 1;
  let result;

  for (let i = 1; i < n; i++) {
    for (let y = 0; y < i; y++) {
      currentNum += 2;
    }
  }
  result = currentNum;
  for (let i = 1; i < n; i++) {
    currentNum += 2;
    result += currentNum;
  }
  return result;
}
