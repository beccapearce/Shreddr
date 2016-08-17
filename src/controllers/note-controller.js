(function(exports) {
  var notelistcontroller = new NoteList();
  var viewdanotes = new NoteListView(notelistcontroller);

  document.getElementById('submit').addEventListener('click', function() {
      var text = document.getElementById('notebook').value;
      notelistcontroller.createNote(text);
      renderNotes();
    });
  renderNotes = function() {
    var element = document.getElementById('listofnotes');
    element.innerHTML = viewdanotes.render();
    clearTextBox();
  };

  clearTextBox = function(){
    document.getElementById('notebook').value = '';
  };

  urlChange();

       function urlChange() {
         window.addEventListener("hashchange", showCurrentPageId);
       }

       function showCurrentPageId() {
         showNote(getIdfromUrl(window.location));
       }

       function getIdfromUrl(location) {
         return location.hash.split('#')[1];
       }

       function showNote(id) {
       var newNoteSingleViewa = new NoteSingleView(viewdanotes.notes[id]);
           document.getElementById("notelist");
           document.innerHTML = newNoteSingleViewa.render();
       }

exports.NoteController = notelistcontroller;
exports.NoteView = viewdanotes;

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
