/* 
        6kyu - Rectangle into Squares
        https://www.codewars.com/kata/55466989aeecab5aac00003e
*/

function sqInRect(length, width) {
    // return null if it is a square already
    if (length === width) return null;
    let result = [];
    while (length !== width) {
        // x = the smaller one between len & width
        // y = the bigger one minus smaller one
        let x = length < width ? length : width;
        let y = (length > width ? length : width) - x;
        length = x;
        width = y;
        // push the smaller one to the result list
        result.push(x);
    }
    // push the last square cuz length === width now
    result.push(length);
    return result;
}