var merge = function(intervals) {
    intervals.sort((a,b)=> a[0] - b[0]);
    let s1 = intervals[0][0]
    let e1 = intervals[0][1]
    let arr = []
    for(let i = 0; i < intervals.length; i++){
        let s2 = intervals[i][0]
        let e2 = intervals[i][1]
        if(e1 >= s2){
            e1 = Math.max(e1,e2)
        } else {
            arr.push([s1,e1])
            s1 = s2
            e1 = e2
        }
    }
    arr.push([s1,e1])
    return arr
};

merge([[1,3],[2,6],[8,10],[15,18]])