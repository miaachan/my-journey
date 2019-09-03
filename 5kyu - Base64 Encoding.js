/* 
        5kyu - Base64 Encoding
        https://www.codewars.com/kata/5270f22f862516c686000161
*/

String.prototype.toBase64 = function () {
    let sth = this.split('').map((char) => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join('');
    let padZero = (sth.length % 6 == 0) ? 0 : 6 - (sth.length % 6);
    sth = sth + new Array(padZero).fill(0).join('');
    return res = sth.match(/.{6}/g).map((code) => {
        let b64index = parseInt(code, 2);
        if (b64index < 26) {
            return String.fromCharCode('A'.charCodeAt() + b64index)
        } else if (b64index < 52) {
            return String.fromCharCode('a'.charCodeAt() + b64index - 26)
        } else if (b64index < 62) {
            return String.fromCharCode('0'.charCodeAt() + b64index - 52)
        }
        return b64index == 62 ? '+' : '/';
    }).join('');
}

String.prototype.fromBase64 = function () {
    let sth = this.split('').map((char) => {
        char = char.charCodeAt();
        if (char >= 'a'.charCodeAt()) {
            return char - 'a'.charCodeAt() + 26;
        } else if (char >= 'A'.charCodeAt()) {
            return char - 'A'.charCodeAt();
        } else if (char >= '0'.charCodeAt()) {
            return char - '0'.charCodeAt() + 52;
        }
        return char == 43 ? '62' : '63';
    });
    let binaryCode = sth.map((b64index) => {
        return b64index.toString(2).padStart(6, '0');
    }).join('')

    return binaryCode.match(/.{8}/g).map((binary) => String.fromCharCode(parseInt(binary, 2))).join('');
}