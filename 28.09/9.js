function isPalindrome(n) {
    let temp = n;
    let rev = 0;
    while (n > 0) {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }
    return temp === rev;
}

n = 1234321;
let numIsPalindrome = isPalindrome(n);
let result = numIsPalindrome ? `Число ${n} является палиндромом` : `Число ${n} не палиндром`;
console.log(result);