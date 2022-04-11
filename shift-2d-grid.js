var shiftGrid = function(grid, k) {
    let output = [];
    const length = grid[0].length;
    grid = grid.reduce((a,b) => a.concat(b)); 
    for(let i = 0; k > i; i++){
        grid.unshift(grid.pop());
    }
    for(let i = 0; grid.length > i; i+=length){
        let arr = [];
        for(let j = 0; length > j; j++){
            arr.push(grid[i+j]);
        }
        output.push(arr);
    }
    return output
};

shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4)