// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

var isValid = function (s) {
    if (s.length % 2 === 1)
        return false;
    let stack = [],
        hash = { ')': '(', '}': '{', ']': '[' };
    for (let i of s) {
        if (i === '(' || i === '[' || i === '{')
            stack.push(i);
        else
            if (stack.pop() !== hash[i])
                return false;
    }
    return stack.length > 0 ? false : true;
};