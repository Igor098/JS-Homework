function splitEvenNums(n) {
    let even_nums = [];
    let odd_nums = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            even_nums.push(i);
        } else {
            odd_nums.push(i);
        }
    }
    return `Четные числа: ${even_nums.toString()}\nНечетные числа: ${odd_nums.toString()}`;
}

let n = 100;
console.log(splitEvenNums(n));