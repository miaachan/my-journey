/* 
        6kyu - Triple trouble
        https://www.codewars.com/kata/55d5434f269c0c3f1b000058
*/

function tripledouble(num1, num2) {
    let str1 = num1.toString(), str2 = num2.toString();

    let _straight3 = (str, count = 1, res = []) => {
        [...str].forEach((val, index) => {
            if (index + 1 < str.length) str[index + 1] == val ? count++ : count = 1;
            if (count === 3) { res.indexOf(val) != -1 ? 0 : res.push(val); }
        })
        return res;
    }

    let _straight2 = (str, res, flag = 0, count = 0, _ = 0) => {
        if (res.length < 1) return 0;
        res.some((val) => {
            while (_ < str.length) {
                str[_] == val ? count++ : count = 0;
                if (count === 2) { flag = 1; return; }
                _++;
            }
            _ = 0;
        })
        return flag;
    }
    
    return _straight2(str2, _straight3(str1))
}