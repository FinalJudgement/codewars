//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  let arr = [];
  let str = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    let currentLet = arr[i].charAt(0).toUpperCase();

    str.push(currentLet)


    for (let p = 0; p < i; p++) {
      let low = arr[i].charAt(0).toLowerCase();
      str.push(low)
    }
    str.push('-')
  }
  str.pop();
  return str.join('');
}

// Others solution
// function accum(s) {
//   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }