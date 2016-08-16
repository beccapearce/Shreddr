var testAnything = require ('./yoda.js');
var NoteListView = require('../src/models/note-list-view.js');
var NoteList = require('../src/models/note-list.js');
var Note = require('../src/models/note.js');

var newNoteList = new NoteList();
var newNoteListView = new NoteListView(newNoteList);

function testNoteViewObject() {
  testAnything(typeof newNoteListView != 'undefined', testNoteViewObject.name);
}

function testRenderNoteListEmpty() {
  testAnything(newNoteListView.render().equals("<ul></ul>"), testRenderNoteListEmpty.name);
}

function testCreateNoteListView() {
  newNoteList.createNote("things that make me happy:");
  testAnything(newNoteListView.notes.equals(newNoteList), testCreateNoteListView.name);
}

function testRenderNoteListOne() {
  testAnything(newNoteListView.render().equals("<ul><li><div>things that make me happy:</div></li></ul>"), testRenderNoteListOne.name);
}

function testRenderNoteListSeveral() {
  newNoteList.createNote("Unicorns and Rainbows");
  testAnything(newNoteListView.render().equals("<ul><li><div>things that make me happy:</div></li><li><div>Unicorns and Rainbows</div></li></ul>"), testRenderNoteListSeveral.name);
}

testNoteViewObject();
testRenderNoteListEmpty();
testCreateNoteListView();
testRenderNoteListOne();
testRenderNoteListSeveral();
