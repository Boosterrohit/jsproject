function parseQueryParameters(url) {
  return Object.fromEntries(new URL(url).searchParams);
}
const url = "https://example.com/path?name=Costas&age=30&city=Lalaland 12";
const queryParams = parseQueryParameters(url);
console.log(queryParams);
