
clickSubmit();

var notelist = new NoteList();
var displayall = new NoteListView(notelist);
var storage = new Storage();

function clickSubmit() {
  document.getElementById('submit').addEventListener('click', function() {
      var text = document.getElementById('notebook').value;
      var note= new Note(text);
      storage.saveNote(note);
      window.setTimeout(function() {storage.retrieveAllNotes();
      }, 500);
      console.log(storage.retrieveAllNotes());
      // displayall.clearNotes();
      // renderNotes();
    });
}

  function renderNotes() {
    var element = document.getElementById('listofnotes');
    element.innerHTML = displayall.render();
    clearTextBox();

  }

  function clearTextBox (){
    document.getElementById('notebook').value = '';
  }
