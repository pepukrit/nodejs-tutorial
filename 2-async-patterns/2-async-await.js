const { readFile } = require("fs");
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// Handle Promise - using async await
const start = async () => {
  try {
    let first = await getText("./content/first.txt");
    let second = await getText("./content/second.txt");
    console.log("First: ", first, "\nSecond: ", second);
  } catch (error) {
    console.log(error);
  }
};

start();
