//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
  const o = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  };

  walk.forEach((val) => o[val]++);

  // for (let i = 0; i < walk.length; i++) {
  //   const c = walk[i];
  //   o[c]++;
  // }

  return o.n == o.s && o.e == o.w && o.n + o.s + o.e + o.w == 0;
}
