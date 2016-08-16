var NoteList = require('./note-list-model.js');
var Note = require('./note-model');
var SpecHelper = require('./specHelper');
var chalk = require('chalk');
console.log("file is running");

var newNoteList = new NoteList();

function testNoteListObject() {
  testAnything(typeof newNoteList != 'undefined', testNoteListObject.name);
}

function testNoteListContainsList() {
  testAnything(newNoteList.list instanceof Array, testNoteListContainsList.name);
}


function testCreateNote() {
  newNoteList.createNote('message in the method');
  var note = new Note('message in the method');
  testAnything(newNoteList.print().equals([note]), testCreateNote.name);
}


function testAnything(test, testName) {
    if (test === true) {
    console.log (chalk.green(testName + " Test passed"));
  } else {
    console.log (chalk.red(testName + " Test failed"));
}
}

testNoteListObject();
testNoteListContainsList();
testCreateNote();
