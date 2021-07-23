// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
	let index = 0; 
	while(strs.every(element => strs[0][index] !== undefined && strs[0][index] === element[index]) && ++index);
	return strs[0].substring(0,index);
};