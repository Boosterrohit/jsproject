const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const sortingAge = ages.sort((a, b) => b - a);
console.log(sortingAge);
let textArea = "";
sortingAge.forEach((age) => {
  textArea += `${age} , `;
});
document.getElementById("ex5").innerHTML = textArea;
