// // Prove that EventEmitter is a default export and see its exports
// const events = require('events');

// // Log the exports of the 'events' module
// console.log(events);

// // Check if the default export is EventEmitter
// console.log('Is EventEmitter the default export?', events === events.EventEmitter);

const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received ${name}, ${id}`);
});

customEmitter.on("response", () => {
  console.log("some other logics");
});

customEmitter.emit("response", "pep", "26");
