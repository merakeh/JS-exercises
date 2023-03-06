function main(firstNum, secondNum, thirdNum) {

    const sum = (a, b) => a + b;
    const subtract = (b, c) => b - c;

    return subtract(sum(firstNum, secondNum), thirdNum);

}

console.log(main(23, 6, 10));