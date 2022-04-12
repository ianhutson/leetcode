var longestCommonPrefix = function(strs) {
    let output = ''
	for(let i = 0; strs[0].length > i; i++){
		for (let j = 0; strs.length-1 > j; j++){
			if (strs[j][i] !== strs[j+1][i]) return output
		}
		output += strs[0][i] 
	}
	return output
};

longestCommonPrefix(["flower","flow","flight"])