//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends) {
  return friends.filter((v, i, a) => {
    if (v.length == 4) {
      return v;
    }
  });
}

// codewars short

function friend(f) {
  return f.filter((v) => v.length == 4);
}
