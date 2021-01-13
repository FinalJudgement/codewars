//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let nums = numbers.split(' ');
  let numInt = [];
  let array = [];

  for (let i = 0; i < nums.length; i++) {
    numInt.push(+nums[i]);
  }

  let lowNum = numInt[0];
  let highNum = numInt[0];

  for (let i = 0; i < numInt.length; i++) {
    if (lowNum < numInt[i]) {
      lowNum = numInt[i];
    }
    if (highNum > numInt[i]) {
      highNum = numInt[i];
    }
  }

  array.push(lowNum);
  array.push(highNum);

  return array.join(' ');
}