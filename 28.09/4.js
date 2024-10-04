function isPrime(n){
    if (n < 1){
        return false;
    }
    if (n === 2){
        return true;
    }
    if (n % 2 === 0){
        return false;
    }
    for (let i = 3; i < Number(Math.sqrt(n)) + 1; i += 2) {
        if (n % i === 0){
            return false;
        }
    }
    return true;
}


let n = 7;
if (n === 1){
    console.log('Число 1 не является ни простым, ни составным');
}
else if (isPrime(n)) {
    console.log(`Число ${n} простое`);
} else {
    console.log(`Число ${n} не является простым`);
}