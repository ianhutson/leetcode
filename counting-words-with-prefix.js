var prefixCount = function(words, pref) {
    let count = 0;
    for(let word of words){
        if(word.indexOf(pref) == 0) count++;
    }
    return count;
};

prefixCount(["leetcode","win","loops","success"], "code")