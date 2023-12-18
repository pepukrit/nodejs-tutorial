const { readFile, writeFile } = require("fs").promises;

// Handle Promise - using async await
const start = async () => {
  try {
    let first = await readFile("./content/first.txt", "utf8");
    let second = await readFile("./content/second.txt", "utf8");
    console.log("First: ", first, "\nSecond: ", second);
    await writeFile(
      "./content/promisify.txt",
      `First: ${first}, \nSecond: ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();
