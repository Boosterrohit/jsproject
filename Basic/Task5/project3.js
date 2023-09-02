const data = 6;
const process = (value) => (value <= 1 ? 1 : value * process(value - 1));
console.log(process(data));
document.getElementById("para3").innerHTML = `Output: ${process(data)}`;
