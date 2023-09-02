function counter() {
  let count = 0;
  return function () {
    return count++;
  };
}
const increase = counter();
console.log(increase());
console.log(increase());
console.log(increase());
