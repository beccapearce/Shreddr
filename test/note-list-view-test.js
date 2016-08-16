console.log("note-list-view-test");

var newNoteList = new NoteList();
var newNoteListView = new NoteListView(newNoteList);
var yoda = new Yoda();

function testNoteViewObject() {
  yoda.testAnything(typeof newNoteListView != 'undefined', testNoteViewObject.name);
}

function testRenderNoteListEmpty() {
  yoda.testAnything(newNoteListView.render().equals("<ul></ul>"), testRenderNoteListEmpty.name);
}

function testCreateNoteListView() {
  newNoteList.createNote("things that make me happy:");
  yoda.testAnything(newNoteListView.notes.equals(newNoteList), testCreateNoteListView.name);
}

function testRenderNoteListOne() {
  yoda.testAnything(newNoteListView.render().equals("<ul><li><div>things that make me happy:</div></li></ul>"), testRenderNoteListOne.name);
}

function testRenderNoteListSeveral() {
  newNoteList.createNote("Unicorns and Rainbows");
  yoda.testAnything(newNoteListView.render().equals("<ul><li><div>things that make me happy:</div></li><li><div>Unicorns and Rainbows</div></li></ul>"), testRenderNoteListSeveral.name);
}

testNoteViewObject();
testRenderNoteListEmpty();
testCreateNoteListView();
testRenderNoteListOne();
testRenderNoteListSeveral();
