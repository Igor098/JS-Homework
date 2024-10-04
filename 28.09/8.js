n = 1242

let strNum = String(n);
let countDigits = 0;
for (let i = 0; i < strNum.length; i++) {
    countDigits ++;
}

console.log(`Количество цифр в числе ${n}: ${countDigits}`);