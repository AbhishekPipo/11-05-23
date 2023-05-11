// let mySet = new Set();
// console.log(mySet);

// mySet.add("abhi");
// mySet.add("abhi");
// // mySet.add("abhishek");

// console.log(mySet); //set has only one element bcz set stores unique values abhi abhi is same value hence it stores abhi as unique

// let numbers = [1, 2, 2, 3, 3, 3, 4];
// let numSet = new Set(numbers);
// console.log(numSet);

// let mySet = new Set([1, 2, 4, 4]);
// console.log(mySet.size);
// console.log(mySet.has(2)); //returns true

// // set to array conversion
// let arr=Array.from(mySet);
// console.log(arr);

// remove duplicates from array
let numbers = [1, 2, 2, 3, 4];
let myset = new Set(numbers);

let unique = Array.from(myset);

console.log(unique);
