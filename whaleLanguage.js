let input = "I will get 10k NEX ALLOCATION, IT is DONE!";

input = input.toLowerCase();

const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let index = 0; index < input.length; index++) {
  for (let dex = 0; dex < vowels.length; dex++) {
    if (input[index] === vowels[dex]) {
      resultArray.push(input[index])
      if (input[index] === `e`) {
      resultArray.push(input[index])}
      if (input[index] === `u`) {
      resultArray.push(input[index])
      }
    }
  }
} 

console.log(resultArray.join(``).toUpperCase())
