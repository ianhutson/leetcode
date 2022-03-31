var strStr = function(haystack, needle) {
    if(!needle) return 0;
    if(!haystack) return -1;
    for(let i in haystack);

    let i = 0;
    let j = 0;

    while(i<haystack.length && j<needle.length){

        if(haystack[i]===needle[j]){
            ++i;
            ++j;
        } else {
            i = (++i) - j;
            j = 0;
        }
    }
        if(j===needle.length) return i-j;
        
        return -1;
    
};
  

strStr('hello', 'll')

//1st
// i = 1 j = 0
// i = 2 j = 0
// i = 3 j = 1
// i = 4 j = 2
// i = 3 j = 0