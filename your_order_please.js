//https://www.codewars.com/kata/55c45be3b2079eccff00010f/solutions/javascript

function order(words){
  while(words.split(' 
  ')){

  }
}



function order(words) {
  let wrdArr = words.split(" ");
  const mainArr = [];

  for (let i = 0; i < wrdArr.length; i++) {
    for (let y = 0; y < wrdArr.length; y++) {
      if (wrdArr[y].includes(i + 1)) {
        mainArr.push(wrdArr[y]);
      }
    }
  }
  return mainArr.join(" ");
}
