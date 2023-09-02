const input3 = "George Raymond Richard Martin";
function abbrName(name) {
  const character = name.split(" ");
  let initials = "";
  for (let i = 0; i < character.length; i++) {
    initials += character[i][0].toUpperCase();
  }
  return initials;
}
const initials = abbrName(input3);
console.log(initials);
document.getElementById("demo4").innerHTML = `Output: ${initials}`;
