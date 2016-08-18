(function(exports) {

  function NoteListView(notelist) {
    this.notes = notelist;
  }

  NoteListView.prototype.render = function(){
    var returnString = "<ul id='note-list'>";
    notelist.retrieveNoteList();
    for(var i=0; i<this.notes.list.length; i++){
      returnString += "<li><div><a id=" +[i]+ " href='#" + [i] + "'>" + this.notes.list[i].message.substring(0,20) + "</a></div></li>";
    }
    return returnString + "</ul>";
  };

  NoteListView.prototype.clearNotes = function() {
    var divList = document.getElementById('note-list');
    if (divList !== null) {
      while (divList.hasChildNodes()) {
        divList.removeChild(divList.firstChild);
      }
    }
  };

  exports.NoteListView = NoteListView;
})(this);
