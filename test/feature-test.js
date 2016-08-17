console.log("feature test");

var newNoteController = new NoteController();
var newNoteList = new NoteList();
var newNoteListView = new NoteListView(newNoteList);
var yoda = new Yoda();


function beforeFeatureTest() {
  newNoteList.createNote("go team Shreddr! go team Shreddr! go team Shreddr!");
  newNoteController.renderPage();
}

function testNoteListExists() {
  yoda.testAnything(document.getElementById("app") !== null, testNoteListExists.name);
}

function testNoteListValue() {
  yoda.testAnything(document.getElementById("app").textContent.indexOf('go team') !== -1, testNoteListValue.name);
}

function testClickNote() {
  window.setTimeout(function () {
  yoda.testAnything(document.getElementById('app').textContent.indexOf('go team Shreddr! go team Shreddr! go team Shreddr!') !== -1, testClickNote.name);
  }, 1000);
  document.getElementById("0").click();
}

beforeFeatureTest();
testNoteListExists();
testNoteListValue();
testClickNote();
