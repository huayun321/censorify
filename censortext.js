var censoredWords = ["sad", "bad", "mad"];
var customCensoredwords = [];

function censor(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], '***');
    }
    for (idx in customCensoredwords) {
        inStr = inStr.replace(customCensoredwords[idx], '***');
    }
    return inStr;
}

function addCensoredWord(word) {
    customCensoredwords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredwords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;