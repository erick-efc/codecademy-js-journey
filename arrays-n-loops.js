// This is just an example to manipulate arrays and loops

// Mutual Followers check
const markFollowers = [ 'Allan', 'Rick','John', 'Stu', 'Hommer', 'Bart'];
const zuckFollowers = [ 'Allan', 'Stu', 'Margaret', 'Fred', 'Bart'];

let mutualFollowers = [];
for (let i = 0; i < markFollowers.length; i++) {
  for (let j = 0; j < zuckFollowers.length; j++) {
    if (markFollowers[i] === zuckFollowers[j]) {
      mutualFollowers.push(markFollowers[i]);
    }
  }
}
console.log(mutualFollowers.join(', '))

// Do while example:

let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded += 1;
  console.log(cupsAdded);
} while (cupsAdded < 4);

while (cupsAdded < 4) {
  cupsAdded += 1;
  console.log(cupsAdded);
}

// for...of loops:
const fruits = ['oranges', 'apples', 'grapes'];
fruits.push('bananas', 'pineapples')

fruits.pop()

for (const fruit of fruits) {
  console.log(fruit);
}