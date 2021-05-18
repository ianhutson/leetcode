// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

 

// Example 1:

// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"
// Example 2:

// Input: s = "aeiou"
// Output: ""

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }