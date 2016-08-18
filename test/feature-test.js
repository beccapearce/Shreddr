console.log("feature test");

var newNoteList = new NoteList();
var newNoteListView = new NoteListView(newNoteList);
var yoda = new Yoda();

function testNoteListExists() {
  yoda.testAnything(document.getElementById("listofnotes") !== null, testNoteListExists.name);
}

function testCreateNote() {
document.getElementById("notebook").value = "oat so simple, golden syrup. oat so simple! You're so posh you have a resting richface!";
document.getElementById("submit").click();
window.setTimeout(function () {
yoda.testAnything(document.getElementById('listofnotes').textContent.indexOf('oat so simple') !== -1, testCreateNote.name);
}, 1000);
}

function testClickNote() {
  document.getElementById("0").click();
  window.setTimeout(function () {
  yoda.testAnything(document.getElementById('listofnotes').textContent.indexOf("oat so simple, golden syrup. oat so simple! You're so posh you have a resting richface!") !== -1, testClickNote.name);
  }, 1000);
}

testNoteListExists();
testCreateNote();
testClickNote();
