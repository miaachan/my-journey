/* 
        4kyu - Text align justify
        https://www.codewars.com/kata/537e18b6147aa838f600001b
*/

/**
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function (str, len) {
    let words = str.split(' ');
    let output = [];

    while (words.length) {
        let lineWords = [];

        while (words.length && (lineWords.toString() + ',' + words[0]).length <= len) {
            lineWords.push(words.shift());
        }
        // This is not the last line
        if (words.length) {
            let spaces = len - lineWords.toString().length;
            // Add spaces
            for (let i = 0; i < spaces; i++) {
                lineWords[i % (lineWords.length - 1)] += ' ';
            }
        }
        output.push(lineWords.join(' '));
    }
    return(output.join('\n'));
};