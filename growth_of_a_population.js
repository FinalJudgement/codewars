//https://www.codewars.com/kata/563b662a59afc2b5120000c6/solutions/javascript

function nbYear(p0, percent, aug, p) {
  let count = 0;

  while (p > p0) {
    p0 = p0 + p0 * (percent * 0.01) + aug;
    count++;
  }
  return count;
}
