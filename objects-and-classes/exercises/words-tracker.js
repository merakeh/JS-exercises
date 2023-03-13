function wordsTracker(myArr) {
    let searchedWords = myArr.shift().split(' ');

    let words = {};

    for (const word of searchedWords) {
        let count = myArr.filter((w) => w === word).length;
        words[word] = count;
    }

    let wordsListSorted = Object.entries(words)
        .sort((a, b) => b[1] - a[1]);
    
    for (const [word, count] of wordsListSorted) {
        console.log(`${word} - ${count}`)
    }  
}



wordsTracker(
    [
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]
);