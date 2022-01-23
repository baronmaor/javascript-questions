//  How do get nth Fibonacci number?

// [0,1,1,2,3,5,8]
//fibonacci of 6 = 8

function fibonacci(fibo) {
  let res = [];
  for (i = 0; i <= fibo; i++) {
    if (res[i - 1]) {
      res.push(res[i - 2] + res[i - 1]);
    } else {
      res.push(i);
    }
  }
  return res[fibo];
}

const fibo = fibonacci(6);

console.log(fibo);
