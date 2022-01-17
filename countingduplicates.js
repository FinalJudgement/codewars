// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

//original function
function duplicateCount(text) {
  const o = letterCount(text);
  let count = 0;

  let keys = Object.keys(o);
  for (let i = 0; i < keys.length; i++) {
    let c = keys[i];

    if (o[c] > 1) {
      count++;
    }
  }
  console.log(count);
  return count;
}

function letterCount(str) {
  let o = {};
  for (let i = 0; i < str.length; i++) {
    let c = str[i].toLowerCase();
    if (o[c] === undefined) {
      o[c] = 1;
    } else {
      o[c]++;
    }
  }
  return o;
}

duplicateCount("Indivisibility");
