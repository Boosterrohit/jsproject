// Question no. 1
// If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

const input = [1, -4, 12, 0, -3, 29, -150];
function positiveSumNumber() {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      sum += input[i];
    }
  }
  return sum;
}
const finalResult = positiveSumNumber();
console.log(finalResult);
document.getElementById("demo").innerHTML = finalResult;

// Question no. 2
// Calculate the mean and median values of the number elements from the input array.
const input1 = [12, 46, 32, 64];
function mean() {
  let sum = 0;
  for (let i = 0; i < input1.length; i++) {
    sum += input1[i];
  }
  return sum / input1.length;
}
const Result = mean();
console.log(Result);
document.getElementById("demo2").innerHTML = `Mean Output: ${Result}`;

function median() {
  const sorting = input1.sort((a, b) => b - a);
  const middle = Math.floor(sorting.length / 2);
  if (sorting.length % 2 === 0) {
    const middle1 = sorting[middle - 1];
    const middle2 = sorting[middle];
    return (middle1 + middle2) / 2;
  }
}
const Result1 = median();
console.log(Result1);
document.getElementById("demo3").innerHTML = `Median Output: ${Result1}`;
