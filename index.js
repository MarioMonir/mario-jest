const arrayChunk = require("./arrayChunk.js");

console.log("chunk by 3", arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log("chunk by 2", arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
console.log("chunk by 2", arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
console.log("chunk by 2", arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));

const isAnagram = require("./isAnagram.js");

console.log("is anagram ", isAnagram("elbow", "below"));
// console.log("is anagram ", isAnagram("elbow", "below"));
console.log("is anagram ", isAnagram("elbow", "beloiow"));
console.log("is anagram ", isAnagram("elbow", "be lo ( $ ! w"));
console.log("is anagram ", isAnagram("Dormitory", "dirty room##"));
