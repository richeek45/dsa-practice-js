// Find the Factorial of a large number

function factorialLargeNumber(num) {
  const res = [1];

  if (num <= 1) {
    console.log(res[0]);
    return;
  }

  for (let i = 2; i <= num; i++) {
    let carry = 0;
    let j = 0;
    for (j = 0; j < res.length; j++) {
      const mul = res[j] * i + carry;
      res[j] = mul % 10;
      carry = Math.floor(mul / 10);
    }

    while (carry !== 0) {
      res[j] = carry % 10;
      carry = Math.floor(carry / 10);
      j++;
    }
  }

  console.log(res);

  for (let i = res.length-1; i >= 0; i--) {
    process.stdout.write(`${res[i]}`);
  }
  console.log();

}

const num = 100;
factorialLargeNumber(num);