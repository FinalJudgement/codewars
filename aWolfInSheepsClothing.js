// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep(queue) {
  // return queue.reverse().map(function (item, index, array) {
  //   return item;
  // });
}

function warnTheSheep(queue) {
  let answer;
  queue.reverse().map(function (item, index, array) {
    if (item == "wolf" && index == 0) {
      answer = "Pls go away and stop eating my sheep";
      return;
    } else if (item == "wolf") {
      let sheep = index - 1;
      answer =
        "Oi! Sheep number " + sheep + "! You are about to be eaten by a wolf!";
      return;
    }
  });
  return answer;
}
