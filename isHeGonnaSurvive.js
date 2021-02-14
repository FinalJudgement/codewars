//my solution

function hero(bullets, dragons) {
  if (bullets / 2 >= dragons) {
    return true;
  } else {
    return false;
  }
}

//better solution

function hero(b, d) {
  return b / 2 >= d;
}

//or

function hero(b, d) {
  return b >= d * 2;
}
