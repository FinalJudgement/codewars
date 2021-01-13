// https://www.codewars.com/kata/54c27a33fb7da0db0100040e


//failed code. can't make switch work with it.
var /*(isSquare*/ = function (n) {
  // var square = Math.sqrt(n);
  // var result = (square - Math.floor(square)) !== 0;

  // switch (n) {
  //   case n < 0:
  //     return n + ': Negative numbers cannot be square numbers', false;
  //   case result:
  //     return n + ' is not a square number', false;
  //   default:
  //     return n + ' is a square number(' + square + ' * ' + square + ')', true;
  // }
}

function isSquare(n) {  
  return Math.sqrt(n) % 1 === 0; // this is seing if there is a decimal by using 
}                                //  % 1



var isSquare = function (n) {
  var square = Math.sqrt(n);
  var result = (square - Math.floor(square)) !== 0;
  
  if (n < 0) { 
    return n + ': Negative numbers cannot be square numbers', false;
  } else if (result) {
    return n + ' is not a square number', false;
  } else {  
    return + ' is a square number(' + square + ' * ' + square + ')', true;
  } 
  

}

isSquare(4);