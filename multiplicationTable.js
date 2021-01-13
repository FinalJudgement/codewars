const multiplicationTable = s => [...Array(s)].map((_, i) => [...Array(s)].map((_, j) => (j + 1) * (i + 1)))

const answer = multiplicationTable(3);

console.log(answer)





// function multiplicationTable(size){

//    //input is a number, output should be a 2d array of a number, and fill out the multiples.
//   // take the value of size, and count up from 1 to size
//   //input each number into an array and nest it in a larger array.
//   // input multiples of the value in each array up to the size of the array.
//   //example [[1,2,3],[2,4,6],[3,6,9]]

//   //   const outerArr = [];

//   //   for (let i = 1; i <= size; i++) {
//   //     let nestedArr = [];
//   //     for (let p = 1; p <= size; p++) {
//   //       nestedArr.push(p * i);

//   //     }
//   //     outerArr.push(nestedArr);
//   //   }
//   //   console.log(outerArr);
//   // 



// }









// multiplicationTable = function (size) {
//   let table = [];

//   table = arrayCycle(table, size);

//   return table;

// }


// function addArray(a) {
//   if (a > 0) {
//     a.push([]);
//   }
// }

// function arrayCycle(b, c) {
//   const arr = [];

//   for (let i = 0; i < c; i++) {
//     let countUp = i + 1;
//     arr.push([countUp]);

//   }
//   console.log(arr);
//   return arr;
// }


// multiplicationTable(3)