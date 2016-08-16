var NoteList = require('./note-list');

function NoteListView(notelist) {
  this.notes = notelist;
}

NoteListView.prototype.render = function(){
    var returnString = "<ul>";
    for(var i=0; i<this.notes.list.length; i++){
    returnString += "<li><div>"+ this.notes.list[i].readMessage() + "</div></li>";
  }
  return returnString + "</ul>";
};
module.exports = NoteListView;
