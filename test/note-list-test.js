var NoteList = require('../src/models/note-list.js');
var Note = require('../src/models/note');
var SpecHelper = require('./specHelper');
var testAnything = require ('./yoda.js');
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

testNoteListObject();
testNoteListContainsList();
testCreateNote();
