function solve(number) {
    let total = 0;
    while (number) {
        total += (number % 10);
        number = Math.floor(number / 10);
    }
    console.log(total);
}

solve(245678);
solve(97561);
solve(354);