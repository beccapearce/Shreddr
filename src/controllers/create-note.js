
clickSubmit();

var notelist = new NoteList();
var displayall = new NoteListView(notelist);


function clickSubmit() {
  document.getElementById('submit').addEventListener('click', function() {
      var text = document.getElementById('notebook').value;
      notelist.createNote(text);
      renderNotes();
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

  
