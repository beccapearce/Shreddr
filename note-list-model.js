var Note = require('./note-model');

function NoteList() {
  this.list = [];
}

  // NoteList.prototype.add = function(note) {
  //   this.list.push(note);
  // };

  NoteList.prototype.print = function() {
    return this.list;
  };

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text);
    this.list.push(note);
  };

module.exports = NoteList;
