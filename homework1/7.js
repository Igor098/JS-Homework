function flipNumber(n) {
    let result = 0;
    while (n > 0) {
        let digit = n % 10;
        result = result * 10 + digit;
        n = Math.floor(n / 10);
    }
    return result;
}

let n = 123456;
let reverseNumber = flipNumber(n);
console.log(`Перевернутый вид числа ${n} = ${reverseNumber}`);