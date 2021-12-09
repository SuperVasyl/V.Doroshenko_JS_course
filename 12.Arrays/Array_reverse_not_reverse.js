const array = [1, 2, 12, 15, {}, function x (){} , 'Vasyl', true, 11, 'fuf'];


function reverse(array) {
  for (let i = 0; i < array.length - 1; i++) {
    array.splice(i, 0, array.pop())
  }
  return array;
}

console.log(reverse(array))