function combineArgs(...args) {
  return args.flat();
}
const combined = combineArgs(
  1,
  "Costas",
  [2, 3],
  { name: "costas2" },
  [4, 5, 6]
);
console.log(combined);
