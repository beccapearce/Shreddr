console.log("note-test");

var newNote = new Note("Example string", 2);
var yoda = new Yoda();

function testNoteObject() {
  yoda.testAnything(typeof newNote != 'undefined', testNoteObject.name);
}

function testNoteMessage() {
  yoda.testAnything(newNote.message === "Example string", testNoteMessage.name);
}

function testNoteId() {
  yoda.testAnything(typeof newNote.id === 'number', testNoteId.name);
}


testNoteObject();
testNoteMessage();
testNoteId();
