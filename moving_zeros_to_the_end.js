// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

var moveZeros = function (arr) {
  const length = arr.length;
  const filteredArr = arr.filter((v, i, a) => v !== 0);
  let diff = length - filteredArr.length;
  const zerosArr = Array.from({ length: diff }).map(() => 0);
  return filteredArr.concat(zerosArr);
};

// var moveZeros = function (arr) {
//   let zeroCount = 0;
//   const output = [];

//   for (let i = 0; i < arr.length; i++) {
//     let c = arr[i];
//     if (c !== 0) {
//       output.push(c);
//     } else {
//       zeroCount++;
//     }
//   }
//   const zerosArr = Array.from({length: zeroCount}).map(() => 0)
//   return output.concat(zerosArr)
// };
