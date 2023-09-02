const ages2 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
function sumOfAge() {
  let sum1 = 0;
  for (let i = 0; i < ages2.length; i++) {
    sum1 += ages2[i];
  }
  return sum1;
}
const finalSum = sumOfAge();
console.log(finalSum);
document.getElementById("ex6").innerHTML = `Output: ${finalSum}`;
