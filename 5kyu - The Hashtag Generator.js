/* 
        5kyu - The Hashtag Generator
        https://www.codewars.com/kata/52449b062fb80683ec000024
*/
function generateHashtag (str) {
    str = str.split(" ");
    let res = [];
    while (str.length) {
        str[0].length ? res.push(str.shift()) : str.shift();
    }
    if (!res.length) return false;
    res = '#' + res.map((char) => char.charAt().toUpperCase() + char.slice(1)).join('');
    if (res.length > 140) return false;
    return res;
}