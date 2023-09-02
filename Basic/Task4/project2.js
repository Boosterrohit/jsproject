const familyAge = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
let youngestFamily = familyAge[0];
let oldestFamily = familyAge[0];
for (let i = 0; i < familyAge.length; i++) {
  if (familyAge[i].age < youngestFamily.age) {
    youngestFamily = familyAge[i];
  }
  if (familyAge[i].age > oldestFamily.age) {
    oldestFamily = familyAge[i];
  }
}
const ageDifference = oldestFamily.age - youngestFamily.age;
console.log(youngestFamily.age);
console.log(oldestFamily.age);
console.log(ageDifference);
document.getElementById(
  "para"
).innerHTML = `Youngest Family age: ${youngestFamily.age}`;
document.getElementById(
  "para1"
).innerHTML = `Oldest Family age: ${oldestFamily.age}`;
document.getElementById("para2").innerHTML = `Age Difference: ${ageDifference}`;
