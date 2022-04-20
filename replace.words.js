var replaceWords = function(dictionary, sentence) {
    sentence = sentence.split(' ')
    for(let i = 0; i < dictionary.length; i++){
        for(let j = 0; j < sentence.length; j++){
            if (sentence[j].startsWith(dictionary[i])){
                sentence[j] = dictionary[i]
            }
        }
    }
    sentence = sentence.join(' ')
    return sentence
};

replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery")