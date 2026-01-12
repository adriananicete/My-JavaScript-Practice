for (let count = 1; count <= 5; count++) {
  console.log("Iteration/Loop", count);
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}

console.log(sum);

let arrNum = [1, 2, 3, 4, 5];
let output = 0;

for (let i = 0; i <= arrNum.length - 1; i++) {
  output = output + arrNum[i];
}
console.log(output);

let language = "JavaScript";

for (let index = 0; index < language.length; index++) {
  console.log(language.charAt(index));
}

let names = "AdrianAnicete";

for (let index = 0; index < names.length; index++) {
  console.log(names.charAt(index));
}



// Nested Loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log("Row", i, "Column", j);
  }
}

function twoSums(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            return [i, j]
        }
    }
  }
}

console.log(twoSums([1,2,4,5], 5))