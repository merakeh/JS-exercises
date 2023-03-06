function perfectNumber(n) {
    let divisors = [];

    for (let currentNum = 1; currentNum <= Math.floor(n/2); currentNum++) {
        if (n % currentNum === 0) {
            divisors.push(currentNum);
        }
        
    }
    let divisorsSum = divisors.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    if (n === divisorsSum) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}


perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
