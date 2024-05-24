function doWordsRhyme(word1, word2) {
    // Convert words to lowercase to make the comparison case-insensitive
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    // Define common vowel sounds for English language
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    // Find the last vowel sound in each word
    var lastVowelIndex1 = -1;
    var lastVowelIndex2 = -1;

    for (var i = word1.length - 1; i >= 0; i--) {
        if (vowels.includes(word1[i])) {
            lastVowelIndex1 = i;
            break;
        }
    }

    for (var j = word2.length - 1; j >= 0; j--) {
        if (vowels.includes(word2[j])) {
            lastVowelIndex2 = j;
            break;
        }
    }

    // Check if the endings starting from the last vowel sound are the same
    var ending1 = word1.substring(lastVowelIndex1);
    var ending2 = word2.substring(lastVowelIndex2);

    return ending1 === ending2;
}

console.log(`'polite','site'? ${doWordsRhyme('polite','site')}`);
console.log(`'toon','moon' ? ${doWordsRhyme('toon','moon')}`);
console.log(`'goon','cartoon'? ${doWordsRhyme('goon','cartoon')}`);
console.log(`'sane','lane'? ${doWordsRhyme('sane','lane')}`);
console.log(`'ant','pant'? ${doWordsRhyme('ant','pant')}`);
console.log(`'rant','pant'? ${doWordsRhyme('rant','pant')}`);
console.log(`'soon','noon'? ${doWordsRhyme('soon','noon')}`);
console.log(`'money','honey'? ${doWordsRhyme('money','honey')}`);
console.log(`'money','sunny'? ${doWordsRhyme('money','sunny')}`);
console.log(`'bunny','sunny'? ${doWordsRhyme('bunny','sunny')}`);
console.log(`'lips','tips'? ${doWordsRhyme('lips','tips')}`);
console.log(`'kissthelips','tearthehips'? ${doWordsRhyme('kissthelips','tearthehips')}`);











