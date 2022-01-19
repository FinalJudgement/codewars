// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {
  let low;
  let secondLow;

  for (let i = 0; i < numbers.length; i++) {
    if (low === undefined && secondLow === undefined) {
      if (numbers[i] < numbers[i + 1]) {
        low = numbers[i];
        secondLow = numbers[i + 1];
      } else {
        low = numbers[i + 1];
        secondLow = numbers[i];
      }
    } else if (numbers[i] < low) {
      secondLow = low;
      low = numbers[i];
    } else if (numbers[i] > low && numbers[i] < secondLow) {
      secondLow = numbers[i];
    }
  }
  console.log("low: " + low + " secondLow: " + secondLow);
  return low + secondLow;
}

// function sumTwoSmallestNumbers(numbers) {
//   let firstVal;
//   let secondVal;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > numbers[i + 1]) {
//       secondVal = firstVal;
//       firstVal = numbers[i + 1];
//     }
//   }
//   return firstVal + secondVal;
// }
