(function(exports) {

  function NoteController() {
  element = document.getElementById("app");

  var newNoteList = new NoteList();
  var newNoteListView = new NoteListView(newNoteList);

  newNoteList.createNote("go team Shreddr!");
  element.innerHTML = newNoteListView.render();
}

exports.NoteController = NoteController;

})(this);
