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
  newNoteListView.render();
  yoda.testAnything(newNoteListView.render().equals("<ul><li><div><a id='+[i]+' href='#' + [i] + ' '>things that make me </a></div></li></ul>"), testRenderNoteListSeveral.name);
}

function testRenderNoteListSeveral() {
  newNoteList.createNote("Unicorns and Rainbows");
  yoda.testAnything(newNoteListView.render().equals("<ul><li><div><a id='+[i]+' href='#' + [i] + ' '>things that make me </a></div></li><li><div><a id='+[i]+' href='#' + [i] + ' '>Unicorns and Rainbow</a></div></li></ul>"), testRenderNoteListSeveral.name);
}

testNoteViewObject();
testRenderNoteListEmpty();
testCreateNoteListView();
testRenderNoteListOne();
testRenderNoteListSeveral();
