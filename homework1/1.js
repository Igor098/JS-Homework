function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


let n = 10;
console.log(`Сумма чисел от 1 до ${n} = ${calculateSum(n)}`);