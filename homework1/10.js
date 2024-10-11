function calculateSumPower(n) {
    let sumPow = 0;
    for (let i = 1; i <= n; i++) {
        sumPow += i ** 2;
    }
    return sumPow;
}


let n = 5;
console.log(`Сумма квадратов чисел от 1 до ${n} = ${calculateSumPower(n)}`);