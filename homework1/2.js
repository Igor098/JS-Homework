function calculateFactorial(n) {
    let fact = 1;
    if (n === 0 || n === 1) {
        fact = 1;
    }
    else{
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
    }
    return fact;
}


let n = 6;
console.log(`${n}! = ${calculateFactorial(n)}`);
