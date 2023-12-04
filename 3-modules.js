// Modules - Encapsulated Code - (only share minimum)
// CommonJS, every file in Node is module (by default)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade'); // function in module will still run even if not stored as a function because node wrap it in a function.

sayHi('susan')
sayHi(names.john);
sayHi(names.peter);