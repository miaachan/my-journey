/*
        7kyu - Training JS #42: Regular Expression--( ?: ), ( ?= ) and ( ?! )
        https://www.codewars.com/kata/training-js-number-42-regular-expression-equals-and/train/javascript
*/

var regex = /\d(?=(\d{3})+$)/g;
function addCommas(money, reg) {
    return money.replace(reg, x => x + ",")  //like this
}

console.log(
    addCommas("$123456789", regex)
)
console.log(addCommas("$1234567",regex))
console.log(
    addCommas("$1234",regex)
)

/* 

    Test.assertSimilar(addCommas("$123",regex) , "$123");
    Test.assertSimilar(addCommas("$1234",regex) , "$1,234");
    Test.assertSimilar(addCommas("$12345",regex) , "$12,345");
    Test.assertSimilar(addCommas("$1234567",regex) , "$1,234,567");
    Test.assertSimilar(addCommas("$123456789",regex) , "$123,456,789");
    $68546917686988824398435643040

*/