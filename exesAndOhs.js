//https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    let xCount = 0;
    let oCount = 0;
     console.log(str.split(''))
    for(let i = 0; i < str.split('').length; i++){
      if (str.split('')[i] === 'x' || str.split('')[i] === 'X'){
        xCount += 1;
      }else if(str.split('')[i] === 'o' || str.split('')[i] === 'O'){
        oCount += 1;
      }
      
    }
    if (xCount === oCount){
      return true
    }else{
      return false
    }
  }

  //best solution
  
//   function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
//   }