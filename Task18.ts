let placesToVisit: string[] = ["Tokyo", "Paris", "America", "Italy", "Germany"];
console.log("Original order:");
console.log(placesToVisit);

console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());

console.log("\nOriginal array is still in its original order:");
console.log(placesToVisit);

console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal array is still in its original order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nReversed array:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nArray reversed again:");
console.log(placesToVisit);

placesToVisit.sort();
console.log("\nArray sorted in alphabetical order:");
console.log(placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nArray sorted in reverse alphabetical order:");
console.log(placesToVisit);