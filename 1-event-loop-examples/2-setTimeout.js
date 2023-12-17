console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");

// second will be printed later since it is an asynchronous task - no matter it is a zero second,
// which will be offloaded to run in system kennel
