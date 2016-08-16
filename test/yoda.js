var chalk = require('chalk');
var SpecHelper = require('./specHelper');


function testAnything(test, testName) {
    if (test === true) {
    console.log (chalk.green("Passed " + testName + " has"));
  } else {
    console.log (chalk.red("Failed " + testName + " has"));
    console.log (chalk.yellow("Patience you must have, my young padawan"));
  }
}

module.exports = testAnything;
