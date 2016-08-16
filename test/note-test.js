var Note = require('../src/models/note');
var testAnything = require('./yoda.js');
console.log("file is running");
var newNote = new Note("Example string");

function testNoteObject() {
  testAnything(typeof newNote != 'undefined', testNoteObject.name);
}

function testNoteMessage() {
  testAnything(newNote.readMessage() === "Example string" && newNote.message === "Example string", testNoteMessage.name);
}

testNoteObject();
testNoteMessage();
