function calculateCountDigits(n) {
    let countDigits = 0;
    while (n > 0) {
        let digit = n % 10;
        countDigits++;
        n = Math.floor(n / 10);
    }
    return countDigits;
}


n = 12346346
console.log(`Количество цифр в числе ${n}: ${calculateCountDigits(n)}`);