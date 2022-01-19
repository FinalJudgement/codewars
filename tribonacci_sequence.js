//https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature, n) {
  let arr = [];
  let currentNum = 0;

  while (arr.length < n) {
    if (arr.length < 3) {
      arr.push(signature[arr.length]);
      currentNum++;
    } else {
      console.log(arr);
      arr.push(arr[currentNum - 1] + arr[currentNum - 2] + arr[currentNum - 3]);
      currentNum++;
    }
  }

  return arr;
}
