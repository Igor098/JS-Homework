function calculateSumDigits(n) {
    let sumDigits = 0;
    while (n > 0) {
        let digit = n % 10;
        sumDigits += digit;
        n = Math.floor(n / 10);
    }
    return sumDigits;
}


let n = 1789;
let sumDigits = calculateSumDigits(n);
console.log(`Сумма цифр для числа ${n} = ${sumDigits}`);