var numOfStrings = function(patterns, word) {
    let count = 0
    for(let x of patterns){
        if(word.includes(x)){
            count++
        }
    }
    console.log(count)
    return count
};

numOfStrings(["a","abc","bc","d"], "abc")