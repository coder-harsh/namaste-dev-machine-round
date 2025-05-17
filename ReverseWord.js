function reverseWords(sentence) {
    // Your implementation
    return sentence.split(/(\s+)/).map((word) => {
        return word.trim() ? word.split('').reverse().join('') : word
    }).join('')
}

//For the purpose of user debugging.
reverseWords("Hello World");

module.exports = reverseWords
