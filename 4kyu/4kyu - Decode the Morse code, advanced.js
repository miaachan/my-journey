/*
        4kyu - Decode the Morse code, advanced
        https://www.codewars.com/kata/decode-the-morse-code-advanced/train/javascript

*/
const { performance } = require('perf_hooks');

const MORSE_CODE = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '.----.': '\'',
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': '(',
    '-.--.-': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '-....-': '-',
    '..--.-': '_',
    '.-..-.': '"',
    '...-..-': '$',
    '.--.-.': '@',
    '...---...': 'SOS'
};


var decodeBits = function (bits) {
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces

    // Trim starting & ending zeros
    // bits = bits.replace(/^0+/, '').replace(/0+$/, '')
    bits = bits.replace(/^0+|0+$/g, '');

    // Find out the transmission rate
    let rate,
        diffZeros = [...new Set(bits.match(/0+/g))].map(val => val.length),
        diffOnes = [...new Set(bits.match(/1+/g))];

    if (diffZeros.length == 0) return '.';
    if (diffOnes.length == 1 && diffOnes[0].length != 1) {
        rate = (diffZeros.length) ? Math.min(...diffZeros) : 1;
    } else rate = Math.min(...diffOnes).toString().length;

    return bits.replace(new RegExp('111'.repeat(rate), "g"), '-')
        .replace(new RegExp('000'.repeat(rate), "g"), ' ')
        .replace(new RegExp('1'.repeat(rate), "g"), '.')
        .replace(new RegExp('0'.repeat(rate), "g"), '')
}

var decodeMorse = function (morseCode) {
    // ToDo: Accept dots, dashes and spaces, return human-readable message
    if (morseCode == '.') return MORSE_CODE['.'];

    const diffSpaces = [...new Set(morseCode.match(/ +/g))];
    // Split between words only when diffSpaces.length > 1
    let wordsFlag = (diffSpaces.length > 1) ? true : false;
    let words = (wordsFlag) ? morseCode.split('  ') : morseCode;

    return (wordsFlag) ?
        words.reduce((accu, cur) => {
            let s = "";
            cur.split(' ').forEach(v => s += MORSE_CODE[v]);
            accu.push(s);
            return accu;
        }, []).join(' ')
        : words.split(' ').map(val => MORSE_CODE[val]).join('');
}


let t0 = performance.now();
let res = decodeMorse(
    decodeBits('11111111111111100000000000000011111000001111100000111110000011111000000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000001111100000111111111111111000000000000000111110000011111000001111111111111110000000000000001111100000111110000000000000001111111111111110000011111000001111111111111110000011111000000000000000111111111111111000001111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000111110000000000000001111100000111111111111111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111111111111111000001111111111111110000000000000001111111111111110000011111000000000000000000000000000000000001111100000111110000011111111111111100000111110000000000000001111111111111110000011111111111111100000111111111111111000000000000000111111111111111000001111100000111110000011111111111111100000000000000000000000000000000000111110000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111111111111100000000000000011111111111111100000111111111111111000000000000000111110000011111111111111100000111111111111111000001111100000000000000011111000001111100000111110000000000000000000000000000000000011111111111111100000111111111111111000001111111111111110000000000000001111100000111110000011111000001111111111111110000000000000001111100000000000000011111000001111111111111110000011111000000000000000000000000000000000001111111111111110000000000000001111100000111110000011111000001111100000000000000011111000000000000000000000000000000000001111100000111111111111111000001111100000111110000000000000001111100000111111111111111000000000000000111111111111111000001111111111111110000011111000001111100000000000000011111111111111100000111110000011111111111111100000111111111111111000000000000000000000000000000000001111111111111110000011111000001111100000000000000011111111111111100000111111111111111000001111111111111110000000000000001111111111111110000011111111111111100000111110000000000000001111100000111111111111111000001111100000111111111111111000001111100000111111111111111')
);
let t1 = performance.now();

console.log(res);
console.log("It takes " + (t1 - t0).toFixed(3) + " milliseconds.");