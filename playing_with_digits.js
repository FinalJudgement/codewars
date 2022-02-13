// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

function digPow(n, p) {
  let sum = 0;
  n.toString()
    .split("")
    .map((v, i) => {
      return (sum = sum + v ** (p + i));
    });

  if ((sum / n) % 1 == 0) {
    return sum / n;
  } else {
    return -1;
  }
}
