//https:www.codewars.com/kata/5412509bd436bd33920011bc/train/javascript

//trimmed solution
function maskify(cc) {
  return cc
    .split("")
    .map((val, i, arr) => {
      return cc.length - 4 <= i ? val : "#";
    })
    .join("");
}

// original solution
function maskify(cc) {
  return cc
    .split("")
    .map((val, i, arr) => {
      let fourCount = arr.length - 4;
      if (fourCount <= i) {
        return val;
      } else {
        return "#";
      }
    })
    .join("");
}
