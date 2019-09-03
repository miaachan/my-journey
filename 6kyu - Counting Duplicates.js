/* 
        6kyu - Counting Duplicates
        https://www.codewars.com/kata/counting-duplicates/train/javascript
*/

function duplicateCount(text) {
    let char = text.toUpperCase().split('');
    let dupCount = 0;

    while (char.length) {
        if (char.lastIndexOf(char[0]) != 0) {
            char = char.filter((v) => v != char[0]);
            dupCount++;
        } else char.shift();
    }

    return dupCount;
}