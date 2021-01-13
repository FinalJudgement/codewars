//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// String.prototype.toJadenCase = function () {
//   let wordsArr = this.split(' ');
//   let arr = [];
//   for (let i = 0; i < wordsArr.length; i++) {
//     let firstLet = wordsArr[i].charAt(0).toUpperCase()
//     let firstWord = wordsArr[i].slice(1,)
//     arr.push(firstLet + firstWord);
//   }
//   return arr.join(' ');
// };

// String.prototype.toJadenCase = function () {
//   let wordsArr = this.split(' ');
//   var mapCallback = (element, index, array) => {
//     return element.charAt(0).toUpperCase() + element.slice(1,)
//   }

//   let updatedWordsArr = wordsArr.map(mapCallback);
//   console.log(updatedWordsArr)
// };

String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1,))
    .join(' ')
}

const sampleSentence = 'High my name is carlos';
sampleSentence.toJadenCase();