//https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

function toCamelCase(str) {
  let letterArr = str.split("");

  return letterArr
    .map((v, i, a) => {
      if (i === 0) {
        return v;
      } else if (a[i] === "_" || a[i] === "-") {
        return;
      } else if (a[i - 1] === "_" || a[i - 1] === "-") {
        return v.toUpperCase();
      } else {
        return v;
      }
    })
    .join("");
}
