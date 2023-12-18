const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// Handle Promise - using async await
const start = async () => {
  try {
    let first = await readFilePromise("./content/first.txt", "utf8");
    let second = await readFilePromise("./content/second.txt", "utf8");
    console.log("First: ", first, "\nSecond: ", second);
    await writeFilePromise(
      "./content/promisify.txt",
      `First: ${first}, \nSecond: ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();
