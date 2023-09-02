function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
const jsonString =
  '[{"name":"Company One","category":"Finance","start":1981,"end":2004},{"name":"Company Two","category":"Retail","start":1992,"end":2008}]';
console.log(isValidJSON(jsonString) ? "Valid JSON" : "Not valid JSON");
