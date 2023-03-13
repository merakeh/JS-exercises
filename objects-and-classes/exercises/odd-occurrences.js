function solve(input) {
    let wordList = input.toLowerCase().split(' ');
    let wordsObject = {};

    for (const word of wordList) {
        if (!wordsObject.hasOwnProperty(word)) {
            wordsObject[word] = 0;
        }

        wordsObject[word] += 1;
    }

    let result = [];

    Object.entries(wordsObject)
    .filter(([_key, value]) => value % 2 !== 0)
    .forEach((element) => result.push(`${element[0]}`));

    console.log(result.join(' '));
      
}




solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');