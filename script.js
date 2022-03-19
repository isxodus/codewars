'use strict';

function lovefunc(flower1, flower2) {
  //   xor
  let boo = !((flower1 % 2 == 0) ^ (flower2 % 2 == 1));

  alert(boo ? 'Yes, they are' : 'No they dont');
  return !((flower1 % 2 == 0) ^ (flower2 % 2 == 1));
}

let leaves1, leaves2;

leaves1 = prompt('Please enter number of petals for the first flower');
leaves2 = prompt('Please enter number of petals for the second flower');
lovefunc(leaves1, leaves2);
