var cellsInRange = function(s) {
    s = s.split(":");
    const min = s[0][1];
    const max = s[1][1];
    let letters = [];
    let firstLetter = s[0][0];
    let secondLetter = s[1][0];
    let output = [];

    if (Math.abs(secondLetter.charCodeAt(0) - firstLetter.charCodeAt(0)) == 1){
        letters.push(s[0][0], s[1][0]);
    } else {
        for (let i = firstLetter.charCodeAt(0); i < secondLetter.charCodeAt(0); i++){
            letters.push(String.fromCharCode(i));
        }
        letters.push(secondLetter);
    }
    
    for(let i = 0; i < letters.length; i++){
        for(let j = min; j <= max; j++){
            output.push(String(letters[i])+j)
        }
    }
    return output
};

cellsInRange("K1:M2")