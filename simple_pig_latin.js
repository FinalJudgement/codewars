// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  let strArr = str.split(" ");
  let answer = [];

  for (let i = 0; i < strArr.length; i++) {
    if (/[a-zA-Z]/gm.test(strArr[i][0])) {
      answer.push(strArr[i].substring(1) + strArr[i][0] + "ay");
    } else {
      answer.push(strArr[i]);
    }
  }

  return answer.join(" ");
}
