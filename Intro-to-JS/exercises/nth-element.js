
function solve(aList, step) {
    let newList = [];
    for (let i = 0; i < aList.length; i++) {
        if (i % step == 0) {
            newList.push(aList[i]);
        }
    }
    return newList;
}

solve(['5','20','31','4','20'], 2);
solve(['dsa', 'asd', 'test', 'tset'], 2);
solve(['1', '2', '3', '4', '5'], 6);
