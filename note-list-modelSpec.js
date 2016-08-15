var NoteList = require('./note-list-model.js');
var Note = require('./note-model');
var SpecHelper = require('./specHelper');
console.log("file is running");

var newNoteList = new NoteList();

function testNoteListObject() {
  testAnything(typeof newNoteList != 'undefined', testNoteListObject.name);
}

function testNoteListContainsList() {
  testAnything(newNoteList.list instanceof Array, testNoteListContainsList.name);
}

// function testPrintList() {
//   newNoteList.add('some text');
//   testAnything(newNoteList.print().equals(['some text']), testPrintList.name);
// }

function testCreateNote() {
  newNoteList.createNote('message in the method');
  var note = new Note('message in the method');
  console.log([note]);
  console.log(newNoteList.print());
  testAnything(newNoteList.print().equals([note]), testCreateNote.name);
}


function testAnything(test, testName) {
    if (test === true) {
    console.log(testName + " Test passed");
  } else {
    console.log(testName + " Test failed");
}
}

testNoteListObject();
testNoteListContainsList();
testCreateNote();
