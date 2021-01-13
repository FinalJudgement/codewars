//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
  let nArr = n.toString().split('');
  let sum = 0;

  while (true) {
    sum = 0;
    sum = addDigits(nArr, sum);

    if (sum < 10) {
      return sum;
    } else {
      nArr = sum.toString().split('')
    }
  }
}


function addDigits(a, b) {
  for (let i = 0; i < a.length; i++) {
    let currentNum = +a[i];
    b += currentNum;
  }
  return b;
}
