// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

let sample = [1, 4, 6, 8, 22];

function pipeFix(numbers) {
  let amountOfNumbers = numbers.length;
  let lastNumberOfArray = amountOfNumbers - 1;
  let fixedPipe = numbers.map((item, index, array) => {
    let lastNum = array.length - 1;
    let finalPipeArr = [];
    return array;
  });
  return fixedPipe;
}
console.log(sample);
console.log(pipeFix(sample));

//My Raw Solution

// function pipeFix(numbers){
//   const fixedPipingArr = [];

//   for(let i = numbers[0]; i <= numbers[numbers.length-1]; i++){
//     fixedPipingArr.push(i);
//   }

//   return fixedPipingArr
// }
