function solve(count, inputArray) {
    let newArr = [];

    for (let i = 0; i < count; i++) {
        newArr.push(inputArray[i]);
    }

    newArr = newArr.reverse();
    console.log(newArr.join(" "));
}

solve(3, [10, 20, 30, 40, 50]);
