// Question: How would you remove duplicate members from an array?

// [1,2,2,3,5,6,6] -> [1,2,3,5,6]

function removeDuplicatedNumbers(arr) {
  const res = new Set();
  arr.forEach((number) => {
    res.add(number);
  });
  return res;
}

const arr = [1, 2, 1, 3, 5, 5];
const uniqArr = removeDuplicatedNumbers(arr);

console.log(uniqArr);
