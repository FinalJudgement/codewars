// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

// best practice
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

// my solution

// function warnTheSheep(queue) {
//   let answer;
//   queue.reverse().map(function (item, index, array) {
//     if (item == "wolf" && index == 0) {
//       answer = "Pls go away and stop eating my sheep";
//       return;
//     } else if (item == "wolf") {
//       let sheep = index;
//       answer =
//         "Oi! Sheep number " + sheep + "! You are about to be eaten by a wolf!";
//       return;
//     }
//   });
//   return answer;
// }
