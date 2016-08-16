var Note = require('./note-model');
console.log("file is running");
var newNote = new Note("Example string");

function testNoteObject() {
  return typeof newNote != 'undefined';
}

function testNoteMessage() {
  return newNote.readMessage() === "Example string" && newNote.message === "Example string";
}

function testAnything(test) {
  if (test === true) {
    console.log("Test passed");
  } else {
    console.log("Test failed");
}
}

testAnything(testNoteMessage());
testAnything(testNoteObject());
