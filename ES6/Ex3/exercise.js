const companies3 = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
companies3
  .filter((company3) => company3.category === "Retail")
  .map((company3) => {
    company3.start += 1;
    return `Name: ${company3.name}, Category: ${company3.category}, Start: ${company3.start}, End: ${company3.end}`;
  })
  .forEach((companyAll) => {
    document.getElementById("companyDetails").innerHTML += companyAll;
    console.log(companyAll);
  });
