/*
        6kyu - Decode the Morse code
        https://www.codewars.com/kata/decode-the-morse-code/train/javascript


*/

decodeMorse = function (morseCode) {
    let words = morseCode.trim().split('   ');
    return words.reduce((accu, cur) => {
        let s = "";
        cur.split(' ').forEach(v => s += MORSE_CODE[v]);
        accu.push(s);
        return accu;
    }, []).join(' ');
}