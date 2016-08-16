console.log("note-list-test");

var newNoteList = new NoteList();
var yoda = new Yoda();

function testNoteListObject() {
  yoda.testAnything(typeof newNoteList != 'undefined', testNoteListObject.name);
}

function testNoteListContainsList() {
  yoda.testAnything(newNoteList.list instanceof Array, testNoteListContainsList.name);
}


function testCreateNote() {
  newNoteList.createNote('message in the method');
  var note = new Note('message in the method');
  yoda.testAnything(newNoteList.print().equals([note]), testCreateNote.name);
}

testNoteListObject();
testNoteListContainsList();
testCreateNote();
