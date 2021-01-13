//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript


function spinWords(w) {
  let processor = [];
  let arr = [];
  let wordz = w.split(' ');

  for (let i = 0; i < wordz.length; i++) {

    if (wordz[i].length >= 5) {
      processor.push(wordz[i])

      arr.push(processor.join().split('').reverse().join(''));
      processor.pop();
    } else if (wordz[i].length < 5)
      arr.push(wordz[i]);

  }
  return arr.join(' ')
}

//best practice
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }