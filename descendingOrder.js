//https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n) {
  let arr = [];
  let nStr = n.toString().split('').sort();

  for (let i = nStr.length; i > -1; i--) {
    arr.push(nStr[i])
  }
  return +arr.join('');
}



//   function descendingOrder(n){
//     return parseInt(String(n).split('').sort().reverse().join(''))
//   }