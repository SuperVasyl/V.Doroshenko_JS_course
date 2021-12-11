// 1 task
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = arr1.concat(arr2);
console.log('concat =>', result);

// 2 task
let array2 = [1, 2, 3];
array2.reverse();
console.log('reverse =>', array2);

// 3 and 4 task
let array3 = [1, 2, 3];
array3.push(4, 5, 6);
console.log('push =>', array3);
// ***
let array4 = [1, 2, 3];
array4.unshift(4, 5, 6);
console.log('unshift =>', array4);

// 5 and 6 task
let array5 = ['js', 'css', 'jq'];
let elem = array5.shift();
console.log('shift =>', elem);
// ***
let array6 = ['js', 'css', 'jq'];
let del = array6.pop();
console.log('pop =>', del);

// 7 and 8 task
let array7 = [1, 2, 3, 4, 5];
let sub = array7.slice(0, 3);
console.log('slice 7 task =>', sub);
// ***
let array8 = [1, 2, 3, 4, 5];
let sub2 = array8.slice(3, 5);
console.log('slice 8 task =>', sub2);

// 9, 10, 11, 12 task
let array9 = [1, 2, 3, 4, 5];
array9.splice(1, 2);
console.log('splice 9 task =>', array9);
// ***
let array10 = [1, 2, 3, 4, 5];
let delete10 = array10.splice(1, 3);
console.log('splice 10 task =>', delete10);
// ***
let array11 = [1, 2, 3, 4, 5];
array11.splice(3, 0, 'a', 'b', 'c');
console.log('splice 11 task =>', array11);
// ***
let array12 = [1, 2, 3, 4, 5];
array12.splice(1, 0, 'a', 'b');
array12.splice(6, 0, 'c');
array12.splice(8, 0, 'e');
console.log('splice 12 task =>', array12);

// 13 task
let array13 = [3, 4, 1, 2, 7];
console.log('sort =>', array13.sort());

// 14 task
let array14 = {
    js: 'test',
    jq: 'hello',
    css: 'world'
};
console.log('objest,keys =>', Object.keys(array14));