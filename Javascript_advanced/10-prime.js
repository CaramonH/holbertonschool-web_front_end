const countPrimeNumbers = () => {s
  let count = 0;

  for(let i = 2; i <= 100; i++) {
    if(isPrime(i)) {
      count++;
    }
  }
  return count;
};

const isPrime = (num) => {
  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const time1 = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const time2 = performace.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    time2 - time1
  } milliseconds.`
);
