console.log("feature test");

var newNoteController = new NoteController();
var yoda = new Yoda();

function testViewNoteList() {
  element = document.getElementById("app");
  var newNoteList = new NoteList();
  newNoteList.createNote("go team Shreddr!");
  var newNoteListView = new NoteListView(newNoteList);
  element.innerHTML = newNoteListView.render();

  yoda.testAnything(element.innerHTML.equals("<ul><li><div>go team Shreddr!</div></li></ul>"), testViewNoteList.name);
}

testViewNoteList();
