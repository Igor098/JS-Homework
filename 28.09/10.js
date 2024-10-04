let n = 5;
let sumPow = 0
for (let i = 1; i <= n; i++) {
    sumPow += i ** 2;
}
console.log(`Сумма квадратов чисел от 1 до ${n} = ${sumPow}`);