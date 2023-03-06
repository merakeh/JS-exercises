function main(num) {
    let oddSum = 0;
    let evenSum = 0;

    while (num) {
        let digit = num % 10;
        num = Math.floor(num /10);

        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
}

console.log(main(1000435));
console.log(main(3495892137259234));