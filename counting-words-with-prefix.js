var prefixCount = function(words, pref) {
    let count = 0;
    for(let i = 0; i < pref.length; i++){
        let contains = false;
        for(let j = 0; j < words.length; j++){
            if(words[j][i] !== pref[i]){
                j++
            } else contains = true
        }
        if (contains = true){
            count++
        }
    }
    console.log(count)
};

prefixCount(["leetcode","win","loops","success"], "code")