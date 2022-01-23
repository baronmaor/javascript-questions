// Question: How would you verify a prime number?

// solution 1:
function isPrime(n) {
  var divisor = 2;

  while (n > divisor) {
    if (n % divisor == 0) {
      return false;
    } else divisor++;
  }
  return true;
}
// *************************************************** //

// solution 2:

// https://www.quora.com/Why-do-prime-numbers-always-satisfy-the-6n+1-and-6n-1-conditions-Is-there-mathematical-logic-behind-it
// https://www.delftstack.com/howto/python/python-isprime/#:~:text=isprime()%20is%20a%20built,the%20number%20is%20not%20prime.&text=isprime()%20function%20to%20check%20whether%20the%20given,a%20prime%20number%20in%20Python.
function isPrime2(n) {
  if (n == 2 || n == 3) return true;
  if (n % 2 == 0 || n < 2) return false;
  for (let i = 3; i < n ** 0.5 + 1; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// *************************************************** //
