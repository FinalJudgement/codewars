//https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

function longest(s1, s2) {
  let combine = s1.toLowerCase() + s2.toLowerCase();

  return combine
    .split("")
    .filter((v, i, a) => a.lastIndexOf(v) === i)
    .sort()
    .join("");
}
