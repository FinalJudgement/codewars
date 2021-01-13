//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript

function findShort(s){
    let splitArr = s.split(' ');
    let min = splitArr[0]; 
    
    for(let i = 0; i < splitArr.length; i++){
      if(splitArr[i].length < min.length){
        min = splitArr[i];
      }
    }
    return min.length;
  }


//   function findShort(s){
//     return Math.min.apply(null, s.split(' ').map(w => w.length));
//   }