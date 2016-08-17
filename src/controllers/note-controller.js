(function(exports) {

  function NoteController() {
    var notelistcontroller = new NoteList();
    document.getElementById('submit').addEventListener('click', function() {
      NoteController.writeNote();
    });


    // var newNoteListView = new NoteListView(newNoteList);
  }


  NoteController.prototype.writeNote = function() {
    var text = document.getElementById('notebook').value;
    notelistcontroller.createNote(text);
    var viewdanotes = new NoteListView(notelistcontroller);
    var element = document.getElementById('listofnotes');
    element.innerHTML = viewdanotes.render();
    document.getElementById('notebook').value = '';

  };



exports.NoteController = NoteController;

})(this);
















  // document.getElementById('submit').addEventListener('click', function() {
  //   var text = document.getElementById('notebook').value;
  //   notelistcontroller.createNote(text);
  //   updateNoteList();
  // });
  //
  //
  //   // NoteController.prototype.renderPage = function() {
  //   //   element = document.getElementById("app");
  //   //   element.innerHTML = newNoteListView.render();
  //   // };
  //
  //   // NoteController.prototype.writeNote = function() {
  //   //
  //   //   });
  //   // };
  //
  //     NoteController.prototype.updateNoteList = function () {
  //       var viewdanotes = new NoteListView(notelistcontroller);
  //       var element = document.getElementById('listofnotes');
  //       element.innerHTML = viewdanotes.render();
  //       clearTextBox();
  //     };
  //
  //
  //
  //     NoteController.prototype.clearTextBox = function() {
  //       document.getElementById('notebook').value = '';
  //     };


// NoteController.writeNote();
