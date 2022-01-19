// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arr = [];
  let lowerCase = text.toLowerCase().split(" ").join("");

  for (let i = 0; i < lowerCase.length; i++) {
    let cLet = lowerCase[i];
    if (alphabet.indexOf(cLet) !== -1) {
      arr.push(alphabet.indexOf(cLet) + 1);
    }
  }
  return arr.join(" ");
}
