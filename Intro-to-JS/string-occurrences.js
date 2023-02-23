function solve(text, word) {
    let counter = 0;
    let words = text.split(" ");

    for (let element of words) {
        if (element === word) {
            counter++;
        }
    }
    console.log(counter);
}

solve('This is a word and it also is a sentence', 'is');
solve('softuni is great place for learning new programming languages', 'softuni');