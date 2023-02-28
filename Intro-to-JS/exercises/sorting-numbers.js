function sortingNumbers(newArr) {
    let sorted = [...newArr].sort((aNum, bNum) => aNum - bNum);
    let step = 0;
    let result = [];

    while (sorted.length > 0) {
        if (step % 2 === 0) {
            result.push(sorted.shift());
        } else {
            result.push(sorted.pop());
        }

        step++;
    }
    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);