
function matrixDeveloper(n) {
    new Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(' ')))
}

matrixDeveloper(3);
matrixDeveloper(7);