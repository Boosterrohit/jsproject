function sumNumber() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] === "number") {
      sum += arguments[i];
    }
  }
  return sum;
}
const resutl = sumNumber(33, 12, 20, 16, 5);
console.log(resutl);
