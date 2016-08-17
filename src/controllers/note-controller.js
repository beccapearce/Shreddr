(function(exports) {

  function NoteController() {
    var newNoteList = new NoteList();
    var newNoteListView = new NoteListView(newNoteList);
  }

    NoteController.prototype.renderPage = function() {
      element = document.getElementById("app");
      element.innerHTML = newNoteListView.render();
    };

exports.NoteController = NoteController;

})(this);
