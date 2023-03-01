
function stringSubstring(word, text) {
    let wordLowercase = word.toLowerCase();
    let textArr = text.split(" ");

    for (const w of textArr) {
        if (w.toLowerCase() === wordLowercase) {
        return word;
        }
    }
    
    return `${word} not found!`
}

console.log(
stringSubstring('javascript', 'JavaScript is the best programming language'));
console.log(
stringSubstring('python', 'JavaScript is the best programming language'));
