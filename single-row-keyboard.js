var calculateTime = function(keyboard, word) {
    let currIndex = 0;
    let sum = 0;
    for (let i = 0; i < word.length; i++){
        sum += Math.abs(currIndex - keyboard.indexOf(word[i]))
        currIndex = keyboard.indexOf(word[i])
    }
    console.log(sum)
};

calculateTime("abcdefghijklmnopqrstuvwxyz", "cba")