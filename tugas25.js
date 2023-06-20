let x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log("Sebelumnya :", x);
console.log("Ascending :", x.sort());
console.log("Descending :", x.sort().reverse());
console.log(
  "Filter > 10 :",
  x
    .sort()
    .reverse()
    .filter((number) => {
      return number > 10;
    })
);
