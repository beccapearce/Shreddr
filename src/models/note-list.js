// var Note = require('./note');

(function(exports) {

  function NoteList() {
    this.list = [];
  }

    NoteList.prototype.print = function() {
      return this.list;
    };

    NoteList.prototype.createNote = function(text) {
      var note = new Note(text);
      this.list.push(note);
    };

  exports.NoteList = NoteList;
})(this);
