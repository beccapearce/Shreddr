console.log("note-test");

var newNote = new Note("Example string");
var yoda = new Yoda();

function testNoteObject() {
  yoda.testAnything(typeof newNote != 'undefined', testNoteObject.name);
}

function testNoteMessage() {
  yoda.testAnything(newNote.readMessage() === "Example string" && newNote.message === "Example string", testNoteMessage.name);
}

testNoteObject();
testNoteMessage();
