const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/writeFileSync.txt",
  `Writing file sync: ${first}, ${second}`,
  { flag: "a" }
);
