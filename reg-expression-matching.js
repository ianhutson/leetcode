var isMatch = function(s, p) {
    let output;
    s = [...s];
    p = [...p];
    const found = p.some(r=> s.indexOf(r) >= 0)
    if(s == p || p == '.' || !found){
        output = true;
    } else if(p.includes('*')){
        const arraysEqual = function(a1,a2) {
            return JSON.stringify(a1)==JSON.stringify(a2);
        }        
        for(let i = 0; p.length > i; i++){
            if(p[i] === '*'){
                p[i] = s[i];
            }
        }
        console.log('s: '+s+" | "+'p: '+p)
        output = arraysEqual(p,s)
    } else if(p.includes('.')){
        for(let i = 0; p.length > i; i++){
            if (s[i] !== p[i] && p.indexOf('.')-1 == s.length) output = false;          
        } 
    } else {
        output = false;
    }
    return output;
};

isMatch('aab', 'c*a*b')

// function arraysEqual(a1,a2) {
//     return JSON.stringify(a1)==JSON.stringify(a2);
// }

// console.log(arraysEqual(['a', 'a'],['a', 'a']))