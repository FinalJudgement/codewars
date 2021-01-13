//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function /*likes*/(names) {
  //create a function that will receive names of people who liked your post, and announce the names of the people who liked it
  //example: 'no one liked this', 'Peter likes this', 'Jacob and Alex like this'
  //sort through list of names
  //push names into a seperate array to be used for list of likers
  //create a code that will add the persons name into string 'likes this'
  // const theFirstPeople = [];
  // const theLastPerson = [];
  // const tooMany = [];
  // let likers = ' like this'

  // if (names.length == 0) {
  //   return 'no one likes this';
  // } else if (names.length == 1) {
  //   return names[0] + ' likes this'
  // } else if (names.length <= 3) {
  //   for (let i = 0; i < names.length; i++) {

  //     if (i < names.length - 1) {
  //       theFirstPeople.push(names[i]);
  //     } else {
  //       theLastPerson.push([' and ']);
  //       theLastPerson.push(names[i]);
  //     }

  //   }

  //   let removeComma = theFirstPeople.join(', ');
  //   let combine = removeComma + theLastPerson.join('');
  //   for (let i = 0; i < names.length; i++) {

  //   }

  //   return combine + likers
  // } else {
  //   for (let i = 0; i < 3; i++) {
  //     if (i < 2) {
  //       theFirstPeople.push(names[i]);
  //     } else {
  //       let amount = names.length;
  //       let rest = amount - 2;
  //       theLastPerson.push(' and ')
  //       theLastPerson.push(rest);
  //       theLastPerson.push(' others like this')
  //     }
  //   }
  //   console.log(theFirstPeople);
  //   console.log(theLastPerson);
  //   let removeComma = theFirstPeople.join(', ');
  //   let combine = removeComma + theLastPerson.join('');
  //   return combine
  // }
}

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

likes(['John', 'Jacob', 'christ', 'mark']);