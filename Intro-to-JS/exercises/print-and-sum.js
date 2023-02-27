function solve(startIndex, endIndex) {
    let numbers = [];
    let sumNumbers = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        numbers.push(i);
        sumNumbers += i;
    }

    console.log(numbers.join(" "));
    console.log(`Sum: ${sumNumbers}`);
}

solve(5,10);
solve(0, 26);
solve(50, 60);