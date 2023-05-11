//**@iterarotrs
//@using array

let numbers = [1, 2, 3, 4];
let iter = numbers[Symbol.iterator]();
// document.write(iter.next());

iter.next(); //this line does not print bcz it has no clg
console.log("hello world");
console.log("hello world");

console.log(iter.next().value); //2 prints
console.log(iter.next()); //it shows done:false value:3
console.log(iter.next()); //it shows done:false value:4
console.log(iter.next()); //it shows done:false value:3
console.log(iter.next()); //it shows done:false value:3
console.log(iter.next().done); //it shows false bcz there is no other element

//iterators using loop when we have multiple values in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 8, 9, 9, 9, 99, 10];

let iter = numbers[Symbol.iterator]();
let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}

// in case of strings
// let numbers=[1,2,3,4,5,6,7,7,8,8,8,8,9,9,9,99,10];
let str = "abhishek";

let iter = str[Symbol.iterator]();
let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}
//easy way to print str
for (let char of str) {
  console.log(char);
}

//own implementation of iterator
let numbers = [1, 2, 3];
let num = numberIterator(numbers);

function numberIterator(arr) {
  var nextNum = 0;
  return {
    next() {
      if (nextNum < arr.length) {
        return {
          value: arr[nextNum++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}
console.log(num.next());
console.log(num.next());
console.log(num.next());
console.log(num.next());

//
let range = {
  from: 1,
  to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// now it works!
for (let num of range) {
  alert(num); // 1, then 2, 3, 4, 5
}
