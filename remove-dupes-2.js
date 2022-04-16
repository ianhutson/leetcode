var deleteDuplicates = function(head) {
    let indices = [];
    let arr = [];

    head.split('')

    for(let i = 0; i < arr.length; i++){
        if(arr[i] == arr[i+1]){
            indices.push(i+1)
        }
    }
    const length = indices.length
    for (let i = 0; i < length; i++){
        indices[i] -= i
    }
    console.log(indices)
    for (let i = 0; i <= indices.length-1; i++){
        arr.splice(indices[i], 1)
        console.log(arr)
    }
    return arr
};

deleteDuplicates([1,1,2])