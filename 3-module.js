// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require("./4-name");
const sayHi = require("./5-util");
const flavors = require("./6-alternative-flavor");
require("./7-mind-grenade");

console.log(flavors);
console.log(sayHi);
console.log(names);

sayHi("susan");
sayHi(names);
sayHi(names.john);
sayHi(names.peter);
