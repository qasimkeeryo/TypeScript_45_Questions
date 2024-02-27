var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Paris", "America", "Italy", "Germany"];
console.log("Original order:");
console.log(placesToVisit);
console.log("\nAlphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort());
console.log("\nOriginal array is still in its original order:");
console.log(placesToVisit);
console.log("\nReverse alphabetical order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
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
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nArray sorted in reverse alphabetical order:");
console.log(placesToVisit);
