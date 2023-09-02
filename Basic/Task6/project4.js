const _2D = [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];
const FinalReport = {};
for (let r = 0; r < _2D.length; r++) {
  for (let c = 0; c < _2D[r].length; c++) {
    const elements = _2D[r][c];
    if (FinalReport[elements]) {
      FinalReport[elements]++;
    } else {
      FinalReport[elements] = 1;
    }
  }
}
console.log(FinalReport);
document.getElementById(
  "demo7"
).innerHTML = `Output: ${FinalReport} The output is { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1, }`;
